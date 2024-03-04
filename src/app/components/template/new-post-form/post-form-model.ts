export class Post {
    user: string;
    title: string;
    postContent: string;
    subtitle?: string;
    id?: number;

    constructor(
        user: string,
        title: string,
        postContent: string,
        subtitle?: string,
        id ?: number
    ){
        this.user = user;
        this.title = title;
        this.subtitle = subtitle;
        this.postContent = postContent;
        this.id = id;
    }
}