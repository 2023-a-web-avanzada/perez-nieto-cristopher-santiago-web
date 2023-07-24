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
                { // OBJETO A ENVIAR
                    mensaje: this._eventosService.saludar() + ' ' + message.mensaje
                });
        return {mensaje: 'ok'}; // Callback del método "hola"
    }
}


