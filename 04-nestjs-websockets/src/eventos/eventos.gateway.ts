import {
    ConnectedSocket, MessageBody,
    SubscribeMessage, WebSocketGateway
} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';
import {EventosService} from "./eventos.service";

@WebSocketGateway(
    11202, //Puerto donde está escuchando el servidor de websockets
    {
        cors: {
            origin: '*', // Habilitando la conexión desde cualquier IP
        }
    })
export class EventosGateway {
    constructor(private readonly _eventosService: EventosService) {
    }

    @SubscribeMessage('hola')// Nombre del método para recibir eventos
    devolverHola(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket // import {Sercer, Socket} from 'socket.io'
    ) {
        console.log('message', message);
        socket.broadcast //
            // broadcast => TODOS LOS CLIENTES CONECTADOS
            // Y que esten escuchando el evento "escucharEventoHola"
            // les llegue el mensaje
            .emit(
                'escucharEventoHola', // Nombre evento que vamos a enviar
                // a los clientes conectados
                {
                    mensaje: this._eventosService.saludar() + ' ' + message.mensaje;
                });
        return {mensaje: 'ok'}; // Callback del método "hola"
    }
    @SubscribeMessage('unirseSala') // Nombre del método "unirseSala"
    unirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string }, // parametros metodo
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId); //socket.join
        const mensajeDeBienvenidaSala = {
            mensaje:`Bienvenido ${message.nombre} a la sala ${message.salaId}`
        };
        socket.broadcast
            .to(message.salaId)
            .emit('escucharEventoUnirseSala',
                mensajeDeBienvenidaSala);
        return {mensaje: 'ok'}; // Callback del método "hola"
    }
    @SubscribeMessage('enviarMensaje') // Nombre del método "enviarMensaje"
    enviarMensaje(
        @MessageBody()
            message: { salaId: string, nombre: string, mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        // backend
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast
            .to(message.salaId) // Sala a la que enviamos el mensaje
            .emit('escucharEventoUnirseSala', // nombre del evento y datos a enviar
                mensajeSala);
        return {mensaje: 'ok'}; // Callback
    }
}




