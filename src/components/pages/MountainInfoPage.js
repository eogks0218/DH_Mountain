// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom"
// import { mountain_list, search_mountain, selected_mountain } from "../../module/mountain";
// import MountainInfo from "../MountainInfo";
// import Header from "../common/Header";
// import Loading from "../common/Loading";
// import Footer from "../common/Footer";

// export default function MountainInfoPage(){

//     const {pageNo, searchName, mountainId } = useParams();
//     const dispatch = useDispatch();
//     const isLoading = useSelector(state => state.loading.isLoading)

//     useEffect(()=>{
//         if(searchName){
//             dispatch(search_mountain(searchName))
//             return;
//         }else{
//             dispatch(mountain_list(pageNo))
//             return;
//         }
//     }, [dispatch, pageNo, searchName])

//     useEffect(()=>{
//         dispatch(selected_mountain(mountainId))
//     }, [dispatch, mountainId])
    
//     if(isLoading) return <><Loading /></>

//     return(
//         <>
//             <Header />
//             <MountainInfo />
//             <Footer />
//         </>
//     )
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import MountainInfo from "../MountainInfo";
import Header from "../common/Header";
import Loading from "../common/Loading";
import Footer from "../common/Footer";
import { sample_mountain_list, sample_search_mountain_list, selected_mountain } from "../../module/mountain";

export default function MountainInfoPage(){

    const {pageNo, searchName, mountainId } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)

    useEffect(()=>{
        if(searchName){
            dispatch(sample_search_mountain_list(searchName))
            return;
        }else{
            dispatch(sample_mountain_list(pageNo))
            return;
        }
    }, [dispatch, pageNo, searchName])

    useEffect(()=>{
        dispatch(selected_mountain(mountainId))
    }, [dispatch, mountainId])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    
    if(isLoading) return <><Loading /></>

    return(
        <>
            <Header />
            <MountainInfo />
            <Footer />
        </>
    )
}