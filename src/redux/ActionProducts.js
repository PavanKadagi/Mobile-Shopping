import {FILTERING_PRODUCTS, PRODUCT_LIST, RANGE_PRODUCT, SORT_PRODUCT} from './Constant'

export const productsList = ()=>{
    // console.log('action')
    return {
        type:PRODUCT_LIST
    };
}

export const sortingProducts = (value,data)=>{
    console.log('sorting')
    return {
        type:SORT_PRODUCT,
        data,value
    }
}

export const filteringProducts =(value,name,data)=>{
    // console.log('range')
    return {
        type:FILTERING_PRODUCTS,
        data,value,name
    }
}