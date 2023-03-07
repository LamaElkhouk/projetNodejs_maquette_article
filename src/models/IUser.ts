
import crypto from "crypto"
import mongoose from "mongoose"

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

/*const UserSchema = new mongoose.Schema(
    {
        id: { type:crypto.randomUUID(), required: false },
        email: { type: String, required: true ,unique:true},
        username: { type: String , required: true , unique: true},
        password: { type: String , required: true },
        date_inscription:{type:Date, required: true},
        banned:{ type: Boolean, required:true},
        role:{ type: RoleUser, required: true}
    },
    { timestamps: true }
);
*/

//export default mongoose.model<IUser>('User', UserSchema);