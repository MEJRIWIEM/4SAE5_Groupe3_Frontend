import { User } from "./user.model";

export interface Post{
    idPost: number;
    title: string;
    text: string;
    timestamp: Date;
    fileURL: string;
    user: User;
    file_id:number;
}