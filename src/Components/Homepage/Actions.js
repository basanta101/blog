const actions= {
   GET_DATA: "GET_DATA",
   getData :(payload)=>({type: actions.GET_DATA, payload}),
   
   UPDATE_DATA: "UPDATE_DATA",
   updateData : (payload)=>({type: actions.UPDATE_DATA, payload}),
}
export default actions;