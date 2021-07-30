import counter from "./counter";
import isloged from "./isloged";
import {combineReducers} from "redux"

const allReducers = combineReducers({
    counter ,
    isloged   
})

export default allReducers