import { Document } from "mongoose";

export interface IUser extends Document {
    userId: string,
    name: string
}

export type User {
    
}