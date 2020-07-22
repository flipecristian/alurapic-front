export interface Photo {
    id:number;
    postDate:Date;
    url:string;
    descrpition:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;
}