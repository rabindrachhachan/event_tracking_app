
import _ from 'lodash'

export const addToList =(storeData,item)=>{
    if(storeData && storeData.length){
        const index = _.findIndex(storeData,{id: item['id']});
        if(index === -1){
            storeData.push(item);
        }
    }else{
        storeData.push(item)
    }
    return storeData;
}


export const removedFromList =(storeData,item)=>{
    if(storeData && storeData.length){
        storeData =  _.filter(storeData, (sitem) => sitem['id'] !==item['id']);
    }
    return storeData;
}