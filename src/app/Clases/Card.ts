export class Card {
    img: string;
    description: string;
    count_stars: number;
    coste: number[];
    constructor(img: string,description: string,count_stars: number,coste1: number[]){
        this.img=img;
        this.description=description;
        this.count_stars=count_stars;
        this.coste=coste1
    }
}
