import { start_loading, finish_loading } from "./loading";
import axios from "axios";

const MOUNTAIN_LIST_SUCCESS = 'mountain/MOUNTAIN_LIST_SUCCESS'
const MOUNTAIN_LIST_FAILED = 'mountain/MOUNTAIN_LIST_FAILED'

const TOTAL_MOUNTAIN_SUCCESS = 'mountain/TOTAL_MOUNTAIN_LIST_SUCCESS'
const TOTAL_MOUNTAIN_FAILED = 'mountain/TOTAL_MOUNTAIN_LIST_FAILED'

const SEARCH_MOUNTAIN_LIST_SUCCESS = 'mountain/SEARCH_MOUNTAIN_LIST_SUCCESS'
const SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED = 'mountain/SEARCH_MOUNTAIN_LIST_FAILED'

const SELECTED_MOUNTAIN = 'mountain/SELECTED_MOUNTAIN'

export const mountain_list = (pageNo) => async dispatch => {
    dispatch(start_loading());
    try{
        const decodedServiceKey = decodeURIComponent(process.env.REACT_APP_API_KEY);
        const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
            params: {
                serviceKey: decodedServiceKey,
                pageNo: pageNo
            }
        });
        dispatch({ type: MOUNTAIN_LIST_SUCCESS, payload: res.data.response.body.items.item})
    }catch(err){
        dispatch({ type: MOUNTAIN_LIST_FAILED, payload: err})
        throw(err)
    }finally{
        dispatch(finish_loading());
        return;
    }
}

export const total_mountain = () => async dispatch => {
    dispatch(start_loading());
    try{
        const decodedServiceKey = decodeURIComponent(process.env.REACT_APP_API_KEY);
        const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
            params: {
                serviceKey: decodedServiceKey
            }
        });
        dispatch({ type: TOTAL_MOUNTAIN_SUCCESS, payload: res.data.response.body})
    }catch(err){
        dispatch({ type: TOTAL_MOUNTAIN_FAILED, payload: err})
        throw(err)
    }finally{
        dispatch(finish_loading());
        return;
    }
}

export const search_mountain = (mountainName) => async dispatch => {
    dispatch(start_loading());
    try{
        const decodedServiceKey = decodeURIComponent(process.env.REACT_APP_API_KEY);
        const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
            params: {
                mntnNm: mountainName,
                serviceKey: decodedServiceKey
            }
        });
        dispatch({ type: SEARCH_MOUNTAIN_LIST_SUCCESS, payload: res.data.response.body})
    }catch(err){
        dispatch({ type: SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED, payload: err})
        throw(err)
    }finally{
        dispatch(finish_loading());
        return;
    }
}

export const selected_mountain = (mountainId) => ({type: SELECTED_MOUNTAIN, mountainId })

const initialState = {
    totalCount: 0,
    sliceMountainList: [],
    selectMountain: null,
    error: null
}

export const mountain = (state=initialState, action) => {
    switch (action.type) {
        case MOUNTAIN_LIST_SUCCESS:
            return {
                ...state,
                sliceMountainList: action.payload,
                error: null
            }
        case MOUNTAIN_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                sliceMountainList: []
            }
        case TOTAL_MOUNTAIN_SUCCESS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                error: null
            }
        case TOTAL_MOUNTAIN_FAILED:
            return {
                ...state,
                error: action.payload,
                totalCount: 0
            }
        case SEARCH_MOUNTAIN_LIST_SUCCESS:
            return {
                ...state,
                sliceMountainList: action.payload.items.item,
                totalCount: action.payload.totalCount,
                error: null
            }
        case SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED:
            return {
                ...state,
                error: action.payload,
                sliceMountainList: []
            }
        case SELECTED_MOUNTAIN:
            if(state.sliceMountainList.length > 0){
                const selectMountain = state.sliceMountainList.find(mountain => mountain.mntnid === parseInt(action.mountainId))
                return {
                    ...state,
                    selectMountain: selectMountain
                }
            }else{
                return{
                    ...state,
                    selectMountain: state.sliceMountainList
                }
            }
        default:
            return state;
    }
}