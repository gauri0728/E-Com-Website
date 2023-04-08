export interface IproductData{
    id:string;
    title:string;
    name:string;
    description: string;
    image:string;
    price:number;
}

// export interface productid{
//     id:string
// }

export interface CategoryData{
    
    name:string;
    category:string;
    description:string;
    image:string;
}


export interface Icart{
    productId:string;
    image:string;
    name:string;
    description:string;
    quantity:number;
    price:number;
}


export interface Ielectronics{
    id:string;
    name:string;
    category:string;
    description:string;
    image:string;
    price:number;
    quantity:number;
}


export interface Igrocery{
    id:string;
    name:string;
    category:string;
    description:string;
    image:string;
    price:number;
    quantity:number;

}

export interface Ifashion{
    id:string;
    name:string;
    category:string;
    description:string;
    image:string;
    price:number;
    quantity:number;
}


