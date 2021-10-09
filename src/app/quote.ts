export class Quote {
        public upvotes:number;
        public  downvotes:number;
        public datePosted:any;

        constructor(public name:string, public content:string,public author:string,){
            this.name = name;
            this.content = content;
            this.upvotes = 0;
            this.downvotes = 0;
            this.author = author;
            this.datePosted = new Date();
        }
        
}
