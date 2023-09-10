import mongoose, {Schema} from "mongoose";

const albumSchema = new Schema(
    {
        titulo: String,
        autor: String
    }, {
        timestamps: true,
    }
);

const Album = mongoose.model.Album || mongoose.model("Album", albumSchema);

export default Album;