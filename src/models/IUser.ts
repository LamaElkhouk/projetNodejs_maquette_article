
import crypto from "crypto"
import mongoose from "mongoose"
import { Document, Schema, model, Query, Model } from "mongoose";
export enum RoleUser{
    Admin = "Admin",
    Artiste="Artiste",
    Manager = "Manager"
}
export interface IUser{
    id: string,
    email : string,
    username:string,
    password:string,
    date_inscription:Date,
    banned:boolean,
    role: RoleUser
}

/*const UserSchema = new Schema(
    {
        id: crypto.randomUUID(),
        email: String,
        username:String,
        password:String,
        date_inscription:Date,
        banned:Boolean,
        role: RoleUser
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);*/