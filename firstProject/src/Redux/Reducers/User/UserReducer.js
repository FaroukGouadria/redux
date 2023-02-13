const initialState = {
    uid: '',
    userName: '',
    isUSerLogin: '',
    hobby: [],
    moreData: {
        city: '',
    },
};



const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'setId':
            return {
                ...state,
                uid :action.id
            };

        case 'setUserName':
            return {
                ...state,
                userName:action.uname
            };

        case 'setUserData':
            const {uid,uname}=action.data
            return {
                ...state,
                uid:uid,
                userName:uname
            };

        case 'setIsUserLogin':
            return{
                ...state,
                isUSerLogin:action.isUserAuthentificate
            };

            default:
                return state;
    }
}




// userReducer({ type: 'setId', id:1 })
// userReducer({ type: 'setUserName',uname:"kennlo" }) 
// userReducer({ type: 'setUserData',data:{uid:1,uname:"kennlo"} })
// userReducer({ type: 'setIsUserLogin', isUserAuthentificate:true})


export default userReducer;