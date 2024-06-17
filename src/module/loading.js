
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const start_loading = () => ({ type: START_LOADING })
export const finish_loading = () => ({ type: FINISH_LOADING })

const initialState = {
    isLoading: false
}

export const loading = (state=initialState, action) => {
    switch(action.type){
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}