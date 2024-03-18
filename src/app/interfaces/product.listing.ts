
export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    quantity:number
    rating: Rating
  }
  
  export interface Rating {
    rate: number
    count: number
  }
  