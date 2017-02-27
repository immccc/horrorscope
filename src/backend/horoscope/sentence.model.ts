import * as mongoose from "mongoose";

export interface Sentence extends mongoose.Document {
    type: string,
    text: string
};

export class SentenceModel {
    public static schema = new mongoose.Schema({
        type: String,
        text: String
    });

    public static model = mongoose.model<Sentence>("sentences", SentenceModel.schema);

}
