import { FETCH_DATA } from "./actionsType";

const initialState = {
data:null,
loading:true,

};


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case FETCH_DATA:
        return {...state,data:payload,loading:false};
        
        default:
            return state;
        }
        };

        export default reducer;