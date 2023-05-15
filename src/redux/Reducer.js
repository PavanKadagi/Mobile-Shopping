import { ADD_TO_CART, CLREAR_CART, QUANTITY, REMOVE_FROM_CART, SET_DECREASE, SET_INCREASE, SUB_TOTAL } from "./Constant";



export const cartData = (data=[],action)=>{
    switch(action.type){
        case ADD_TO_CART :
           
            const {amount,id,product} = action;

            let existingProduct = data.find((item)=>item.id === id);
            if(existingProduct){
                let updatedProduct = data.map((item)=>{
                    if(item.id === id){
                        let newAmount = item.amount + amount;
                        if(newAmount >= 5){
                            newAmount = 5;
                        }
                    return {...item, amount:newAmount}
                    }else{
                        return item
                    }
                });
                return updatedProduct;
            }else{
                let cartProduct={
                    id,
                    model:product.model,
                    amount,
                    image:product.img,
                    price:product.price,
                    stock:5
                }
    
                // localStorage.setItem("cartData",JSON.stringify([cartProduct,...data]))
                // let cart = getLocatCartData()
                return [cartProduct,...data];
            }
        case SET_DECREASE :
            let updatedProduct = data.map((item)=>{
                if(item.id === action.id){
                    let decAmount = item.amount -1;
                    if(decAmount<=1){
                        decAmount=1;
                    }
                    return {...item,amount:decAmount}
                }else{
                    return item
                }
            })
            return updatedProduct
        case SET_INCREASE:
            let updatedProducts = data.map((item)=>{
                if(item.id === action.id){
                    let incAMount = item.amount+1;
                    if(incAMount >= 5){
                        incAMount = 5;
                    }
                    return {...item,amount:incAMount}
                }else{
                    return item
                }
            })
            return updatedProducts;
        case REMOVE_FROM_CART:
            let remaining = data.filter((item)=>item.id !== action.id )
            return [...remaining]
        
        case CLREAR_CART :
            return []
        default:
            return data;
    }
}

