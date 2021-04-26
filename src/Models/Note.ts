import { model, Model, Schema, Document } from 'mongoose';

interface INote extends Document {
    noteId: string
    author: string
    receiver: string
    note: string
    timestamp: Date
}

const noteSchema: Schema = new Schema({
    noteId: { type: String, required: true },
    author: { type: String, required: true },
    receiver: { type: String },
    note: { type: String },
    timestamp: { type: Date, default: Date.now },
});

const Note: Model<INote> = model('Note', noteSchema);
module.exports = Note;