import actions from './Actions';

const initialState={
  requiredData: null
}

const Reducer =(state= initialState, action)=>{
  debugger;
  const act = actions;
    switch (action.type){
        // case actions.GET_DATA:
        //   return state;
        case actions.GET_DATA:
          return action.payload;
        default:
         return state;
    }
}
export default Reducer;

