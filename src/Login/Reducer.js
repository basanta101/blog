import actions from './Actions'
const initialState={
    validuser: false
}

const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case (actions.STORE_USER) :
            //console.log("from reducer",action.payload)
        return action.payload;
        default :
        return state;
    }
}

export default Reducer;