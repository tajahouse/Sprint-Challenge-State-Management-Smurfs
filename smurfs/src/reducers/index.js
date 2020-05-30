import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE} from "../actions/index"
import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE} from "../actions/index"

const initialState = {
    smurf:[],
    isFetching: false,
    error:'',
};

const reducer = (state =initialState, action) =>{
    switch(action.type){
        //fetch
        case FETCH_SMURF_START:
            return{
                ...state,
                smurf:[],
                isFetching:true,
                error:''
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state, 
                smurf:action.payload,
                isFetching:false,
                error:''
            }
        case FETCH_SMURF_FAILURE:
            return{
                ...state,
                smurf:[],
                isFetching:false,
                error:action.payload
            }
            
            //post
        case POST_SMURF_START:
            return{
                ...state,
                smurf:[],
                isFetching:true,
                error:''
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state, 
                smurf:action.payload,
                isFetching:false,
                error:''
            }
        case POST_SMURF_FAILURE:
            return{
                ...state,
                smurf:[],
                isFetching:false,
                error:action.payload
            }

        default: return state

        }   
}
export default reducer;