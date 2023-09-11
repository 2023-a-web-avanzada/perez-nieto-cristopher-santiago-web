import mongoose, {model, mongo, Schema} from "mongoose";

const albumSchema = new Schema(
    {
        titulo: String,
        autor: String,
        duracion: Number,
        fecha: Date,
        esExplicita: String,
    }, {
        timestamps: true,
    }
);
/*
//const Album = mongoose.model.Album || mongoose.model("Album", albumSchema);
const Album = model("Album", albumSchema);
export default Album;
*/
module.exports = mongoose.models.Album || mongoose.model("Album", albumSchema);