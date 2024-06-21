// import { useDispatch, useSelector } from "react-redux"
// import MountainList from "../MountainList"
// import Header from "../common/Header"
// import { useEffect } from "react";
// import { total_mountain, mountain_list, search_mountain } from "../../module/mountain";
// import Pagination from "../common/Pagination";
// import Footer from "../common/Footer"
// import { useParams } from "react-router-dom";
// import Loading from "../common/Loading";

// export default function MountainListPage(){

//     const dispatch = useDispatch();
//     const totalCount = useSelector(state => state.mountain.totalCount)
//     const isLoading = useSelector(state => state.loading.isLoading)

//     const { pageNo, searchName } = useParams();
    
//     useEffect(()=>{
//         if(searchName){
//             dispatch(search_mountain(searchName))
//             return;
//         }else{
//             dispatch(mountain_list(pageNo))
//             dispatch(total_mountain())
//             return;
//         }
//     }, [dispatch, pageNo, searchName])

//     if(isLoading) return <><Loading /></>

//     return(
//         <>
//             <Header />
//             <MountainList pageNo={pageNo} searchName={searchName}/>
//             <Pagination totalItems={totalCount} />
//             <Footer />
//         </>
//     )
// }

import { useDispatch, useSelector } from "react-redux"
import MountainList from "../MountainList"
import Header from "../common/Header"
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Footer from "../common/Footer"
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { sample_mountain_list, sample_search_mountain_list } from "../../module/mountain";

export default function MountainListPage(){

    const dispatch = useDispatch();
    const [totalCount, setTotalCount] = useState(1336)
    const searchTotalCount = useSelector(state => state.mountain.totalCount)
    const isLoading = useSelector(state => state.loading.isLoading)

    const { pageNo, searchName } = useParams();
    
    useEffect(()=>{
        if(searchName){
            dispatch(sample_search_mountain_list(searchName, pageNo))
            setTotalCount(searchTotalCount)
            return;
        }else{
            dispatch(sample_mountain_list(pageNo))
            setTotalCount(1336)
            return;
        }
    }, [dispatch, pageNo, searchName, searchTotalCount])

    if(isLoading) return <><Loading /></>

    return(
        <>
            <Header />
            <MountainList pageNo={pageNo} searchName={searchName}/>
            <Pagination totalItems={totalCount} />
            <Footer />
        </>
    )
}