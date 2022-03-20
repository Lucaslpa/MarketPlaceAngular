

export class Product { 
     public id : number;
     public img : string;
     public name : string;
     public price : number;
     public description : string;

     constructor(id: number,  img : string, name : string, price : number, description : string){
         this.id = id;
         this.img = img;
         this.name = name;
         this.price = price;
         this.description = description;
     }
}