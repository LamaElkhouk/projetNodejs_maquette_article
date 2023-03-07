import Approval from "./IApproval"

export interface IModel{
    id: string,
    url : string,
    title:string,
    nom_artiste:string, //nom de l'artiste l'ayant posté
    approval:Array<Approval> //un ou plusieurs managers peuvent laisser des approbations
}
export default IModel