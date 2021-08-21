import cardStack from "../components/card-stack";

export default class CardStack {

    constructor(
        private img:string,
        private description:string,
        private urlRepo:string,
        private urlDocs:string
    ){
    }

    public load():string{
        return cardStack(this.img,this.description,this.urlDocs,this.urlRepo);
    }
}