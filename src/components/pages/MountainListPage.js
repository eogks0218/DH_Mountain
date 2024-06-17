import { useDispatch, useSelector } from "react-redux"
import MountainList from "../MountainList"
import Header from "../common/Header"
import { useEffect } from "react";
import { total_mountain, mountain_list, search_mountain } from "../../module/mountain";
import Pagination from "../common/Pagination";
import Footer from "../common/Footer"
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";

export default function MountainListPage(){

    const dispatch = useDispatch();
    const totalCount = useSelector(state => state.mountain.totalCount)
    const isLoading = useSelector(state => state.loading.isLoading)

    const { pageNo, searchName } = useParams();
    
    useEffect(()=>{
        if(searchName){
            dispatch(search_mountain(searchName))
            return;
        }else{
            dispatch(mountain_list(pageNo))
            dispatch(total_mountain())
            return;
        }
    }, [dispatch, pageNo, searchName])

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