import { model, Model, Schema, Document } from 'mongoose';
import { IUser } from '../types/types';

const userSchema: Schema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true }
});

const User: Model<IUser> = model('User', userSchema);
module.exports = User;