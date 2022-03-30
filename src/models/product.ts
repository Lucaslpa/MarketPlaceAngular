

export class Product { 
     constructor(
         public id: number, 
         public img : string, 
         public name : string, 
         public price : number, 
         public description : string, 
         public quantity: number
         ){}
}

export class ProductCart extends Product { 
        constructor(
            public buyQuantity: number,
             id: number, 
             img : string, 
             name : string, 
             price : number, 
             description : string, 
             quantity: number
        ) {
            super(id, img, name, price, description, quantity);
         }
}