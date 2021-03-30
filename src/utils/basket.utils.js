


export const addItemToBasket = (basket, item, qty) =>{
   const existItem = basket.find(basketItem => basketItem.id === item.id);
   if(existItem){
    return basket.map((basketItem)=> basketItem.id === item.id ? 
    {...basketItem, quantity: basketItem.quantity + qty} : basketItem
    );
   }else{
       return [...basket, {...item, quantity: qty}];
   }
}

export const removeItemFromBasket = (basket, item) =>{
    const existItem = basket.find(basketItem=> basketItem.id === item.id);
    if(existItem.quantity === 1){
        return basket.filter(basketItem => basketItem.id !== item.id)
    }else{
        return basket.map((basketItem)=> basketItem.id === item.id ? 
        {...basketItem, quantity: basketItem.quantity - 1} : basketItem
        );
    }
}

export const getBasketTotal = (basket)=>{
    let priceArray = [];
     priceArray  = basket.map((i)=>{
        return i.acf.product_price * i.quantity
     })
     return priceArray.reduce((amount, item)=> item + amount, 0)
}

export const getBasketLength = (basket)=>{
    let basketArray = [];
    basketArray = basket?.map(item=>(
        item.quantity
    ));
    if(basketArray.length > 0)
    return basketArray?.reduce((x, item)=> x + item);
}

