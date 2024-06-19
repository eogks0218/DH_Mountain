// import { start_loading, finish_loading } from "./loading";
// import axios from "axios";

// // const decodedServiceKey = decodeURIComponent(process.env.REACT_APP_MOUNTAIN_KEY);
// const decodedServiceKey = decodeURIComponent(process.env.REACT_APP_API_KEY);

// const MOUNTAIN_LIST_SUCCESS = 'mountain/MOUNTAIN_LIST_SUCCESS'
// const MOUNTAIN_LIST_FAILED = 'mountain/MOUNTAIN_LIST_FAILED'

// const TOTAL_MOUNTAIN_SUCCESS = 'mountain/TOTAL_MOUNTAIN_LIST_SUCCESS'
// const TOTAL_MOUNTAIN_FAILED = 'mountain/TOTAL_MOUNTAIN_LIST_FAILED'

// const SEARCH_MOUNTAIN_LIST_SUCCESS = 'mountain/SEARCH_MOUNTAIN_LIST_SUCCESS'
// const SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED = 'mountain/SEARCH_MOUNTAIN_LIST_FAILED'

// const SELECTED_MOUNTAIN = 'mountain/SELECTED_MOUNTAIN'

// export const mountain_list = (pageNo) => async dispatch => {
//     dispatch(start_loading());
//     try{
//         const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
//             params: {
//                 serviceKey: decodedServiceKey,
//                 pageNo: pageNo
//             }
//         });
//         dispatch({ type: MOUNTAIN_LIST_SUCCESS, payload: res.data.response.body.items.item})
//     }catch(err){
//         dispatch({ type: MOUNTAIN_LIST_FAILED, payload: err})
//         throw(err)
//     }finally{
//         dispatch(finish_loading());
//         return;
//     }
// }

// export const total_mountain = () => async dispatch => {
//     dispatch(start_loading());
//     try{
//         const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
//             params: {
//                 serviceKey: decodedServiceKey
//             }
//         });
//         dispatch({ type: TOTAL_MOUNTAIN_SUCCESS, payload: res.data.response.body})
//     }catch(err){
//         dispatch({ type: TOTAL_MOUNTAIN_FAILED, payload: err})
//         throw(err)
//     }finally{
//         dispatch(finish_loading());
//         return;
//     }
// }

// export const search_mountain = (mountainName) => async dispatch => {
//     dispatch(start_loading());
//     try{
//         const res = await axios.get("http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", {
//             params: {
//                 mntnNm: mountainName,
//                 serviceKey: decodedServiceKey
//             }
//         });
//         dispatch({ type: SEARCH_MOUNTAIN_LIST_SUCCESS, payload: res.data.response.body})
//     }catch(err){
//         dispatch({ type: SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED, payload: err})
//         throw(err)
//     }finally{
//         dispatch(finish_loading());
//         return;
//     }
// }

// const initialState = {
//     totalCount: 0,
//     sliceMountainList: [],
//     selectMountain: null,
//     error: null
// }

// export const mountain = (state=initialState, action) => {
//     switch (action.type) {
//         case MOUNTAIN_LIST_SUCCESS:
//             return {
//                 ...state,
//                 sliceMountainList: action.payload,
//                 error: null
//             }
//         case MOUNTAIN_LIST_FAILED:
//             return {
//                 ...state,
//                 error: action.payload,
//                 sliceMountainList: []
//             }
//         case TOTAL_MOUNTAIN_SUCCESS:
//             return {
//                 ...state,
//                 totalCount: action.payload.totalCount,
//                 error: null
//             }
//         case TOTAL_MOUNTAIN_FAILED:
//             return {
//                 ...state,
//                 error: action.payload,
//                 totalCount: 0
//             }
//         case SEARCH_MOUNTAIN_LIST_SUCCESS:
//             return {
//                 ...state,
//                 sliceMountainList: action.payload.items.item,
//                 totalCount: action.payload.totalCount,
//                 error: null
//             }
//         case SEARCH_MOUNTAIN_LIST_SUCCESS_FAILED:
//             return {
//                 ...state,
//                 error: action.payload,
//                 sliceMountainList: []
//             }
//         case SELECTED_MOUNTAIN:
//             if(state.sliceMountainList.length > 0){
//                 const selectMountain = state.sliceMountainList.find(mountain => mountain.mntnid === parseInt(action.mountainId))
//                 return {
//                     ...state,
//                     selectMountain: selectMountain
//                 }
//             }else{
//                 return{
//                     ...state,
//                     selectMountain: state.sliceMountainList
//                 }
//             }
//         default:
//             return state;
//     }
// }


import { start_loading, finish_loading } from "./loading";
import SampleMountainData from "../sample/MountainData.json"

const SELECTED_MOUNTAIN = 'mountain/SELECTED_MOUNTAIN'

const SAMPLE_MOUNTAIN_LIST_SUCCESS = 'mountain/SAMPLE_MOUNTAIN_LIST_SUCCESS'
const SAMPLE_MOUNTAIN_LIST_FAILED = 'mountain/SAMPLE_MOUNTAIN_LIST_FAILED'

const SAMPLE_SEARCH_MOUNTAIN_LIST_SUCCESS = 'mountain/SAMPLE_SEARCH_MOUNTAIN_LIST_SUCCESS'
const SMAPLE_SEARCH_MOUNTAIN_LIST_FAILED = 'mountain/SAMPLE_SEARCH_MOUNTAIN_LIST_FAILED'

export const selected_mountain = (mountainId) => ({type: SELECTED_MOUNTAIN, mountainId })

export const sample_mountain_list = (pageNo) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_MOUNTAIN_LIST_SUCCESS, pageNo})
    }catch(err){
        dispatch({ type: SAMPLE_MOUNTAIN_LIST_FAILED, payload: err})
        throw(err)
    }finally{
        dispatch(finish_loading());
        return;
    }
}

export const sample_search_mountain_list = (mountainName, pageNo) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_SEARCH_MOUNTAIN_LIST_SUCCESS, mountainName, pageNo})
    }catch(err){
        dispatch({ type: SMAPLE_SEARCH_MOUNTAIN_LIST_FAILED, payload: err})
        throw(err)
    }finally{
        dispatch(finish_loading());
        return;
    }
}

const initialState = {
    totalCount: 1338,
    sliceMountainList: [],
    selectMountain: null,
    error: null
}

export const mountain = (state=initialState, action) => {
    switch (action.type) {
        case SELECTED_MOUNTAIN:
            const selectMountain = SampleMountainData.response.body.items.item.find(mountain => mountain.mntnid === parseInt(action.mountainId))
            return {
                ...state,
                selectMountain: selectMountain
            }
        case SAMPLE_MOUNTAIN_LIST_SUCCESS:
            const sliceStart = (parseInt(action.pageNo)-1)*10
            const sliceEnd = parseInt(action.pageNo)*10
            const sampleSliceMountainList = SampleMountainData.response.body.items.item.filter((item, index) => sliceStart <= index && sliceEnd > index)
            return {
                ...state,
                sliceMountainList: sampleSliceMountainList,
                error: null
            }
        case SAMPLE_MOUNTAIN_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                sliceMountainList: []
            }
        case SAMPLE_SEARCH_MOUNTAIN_LIST_SUCCESS:
            const sampleSearchMountainList = SampleMountainData.response.body.items.item.filter(item => item.mntnnm.includes(action.mountainName))
            const searchSliceStart = (parseInt(action.pageNo)-1)*10
            const searchSliceEnd = parseInt(action.pageNo)*10
            const sampleSearchSliceMountainList = sampleSearchMountainList.filter((item, index) => searchSliceStart <= index && searchSliceEnd > index)
            return {
                ...state,
                sliceMountainList: sampleSearchSliceMountainList,
                totalCount: sampleSearchMountainList.length,
                error: null
            }
        case SMAPLE_SEARCH_MOUNTAIN_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                sliceMountainList: []
            }
        default:
            return state;
    }
}