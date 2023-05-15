import { ADD_TO_CART, CLREAR_CART, QUANTITY, REMOVE_FROM_CART, SET_DECREASE, SET_INCREASE, SUB_TOTAL } from "./Constant"

export const addtocart = (product,amount,id)=>{
    return {
        type:ADD_TO_CART,
        product,amount,id
    }
}

export const removefromcart = (id)=>{
    console.log('action',id)
    return{
        type:REMOVE_FROM_CART,
        id
    }
}

export const setIncrease = (id)=>{
    return{
        type:SET_INCREASE,
        id
    }
}

export const setDecrease = (id)=>{
    // console.log("setDecrease")
    return{
        type:SET_DECREASE,
        id
    }
}

export const clearCart = ()=>{
    return{
        type:CLREAR_CART
    }
}

export const subTotal = ()=>{
    return{
        type:SUB_TOTAL
    }
}


export const quantity = (id,count)=>{
    return{
        type:QUANTITY,
        id,count
    }
}