import CounterReducer from "./Counter/CounterReducer";
import userReducer from "./User/UserReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    counter: CounterReducer,
    user: userReducer
});
export default rootReducer;
// const rootReducer = {
//     counter: {
//         count: 0,
//         length: 10,
//         maxCount: 100, 
//     },
//     user: {
//         uid: '',
//         userName: '',
//         isUSerLogin: '',
//         hobby: [],
//         moreData: {
//             city: '',
//         },
//     }
// }
//access to data : rootReducer.counter.count

