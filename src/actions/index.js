export const increment = (nr , nr1) => {
    return {
        type : "INCREMENT" , 
        payload : nr , 
        payload1 : nr1 , 
    }
}
export const  decrement = () => {
    return {
        type : "DECREMENT" 
    }
}