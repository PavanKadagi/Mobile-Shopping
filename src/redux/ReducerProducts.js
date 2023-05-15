import { FILTERING_PRODUCTS, RANGE_PRODUCT, SET_PRODUCT_LIST, SORT_PRODUCT } from "./Constant";

export const productData = (data=[],action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST :
            return [...action.data.data]

        case SORT_PRODUCT:
            if(action.value === 'a-z'){
                let sorting = action.data.sort((a,b)=>{
                        return a.model.localeCompare(b.model); 
                      })
                return [...sorting,...data]
            }
        case FILTERING_PRODUCTS :
            const {name} = action;
            console.log('---',action,action.value,action.data)
            let tempFilterProduct = [...action.data];
            if(name === 'price'){
                console.warn('---')
               tempFilterProduct = tempFilterProduct.filter((curEle)=>{
                    return curEle.price <= action.value
                })
            }
            if(name === 'company'){
                let company = action.value.toLowerCase();
                company = company.replace(' ','')
                console.warn('---',company)
                tempFilterProduct = tempFilterProduct.filter((curEle)=>curEle.company === company)
            }
            return [...tempFilterProduct,...data];
        default :
        return data;
    }
}