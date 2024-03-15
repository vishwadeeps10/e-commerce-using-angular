export interface ProductListing {
    id:number
    category:string
    description:string
    image:string
    price: number
    rating:Rating
    title:string
}

export interface Rating{
    count: number
    rate:number
}