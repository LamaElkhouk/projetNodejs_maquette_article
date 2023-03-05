//const Joi = require('joi');
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

/*
const userSchemas = 

{
    id:crypto.randomUUID(),
    email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','fr'] } }),
    username:Joi.string().alphanum().min(3).max(30).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    banned:Joi.boolean(),
    role: Joi.string().required(),
}
*/
