import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../scss/Pagination.scss";

export default function Pagination(props) {

    const { totalItems } = props;
    const itemCountPerPage = 10;
    const pageCount = 10;
    const { pageNo, searchName } = useParams();
    const currentPage = parseInt(pageNo);
    const navigate = useNavigate();

    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const [start, setStart] = useState(1);
    const [noPrevious, setNoPrevious] = useState(false);
    const [noNext, setNoNext] = useState(false);
    const [pageValue, setPageValue] = useState("");

    console.log(totalItems)

    useEffect(() => {
        setNoPrevious(start === 1);
        setNoNext(start + pageCount > totalPages);
    }, [start, totalPages]);

    useEffect(() => {
        if (currentPage >= start + pageCount) {
            setStart((previous) => previous + pageCount);
        }
        if (currentPage < start) {
            setStart((previous) => Math.max(1, previous - pageCount));
        }
    }, [currentPage, pageCount, start]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pageNo])

    useEffect(()=>{
        if(pageValue === ""){
            return;
        }
        if(pageValue <= 0){
            setPageValue("")
            alert("페이지는 1페이지부터입니다.")
        }
        if(pageValue > totalPages){
            setPageValue("")
            alert(`페이지는 ${totalPages}페이지까지입니다.`)
        }
    }, [pageValue, totalPages])

    const movePage = () => {
        if(searchName){
            navigate(`/MountainListPage/${pageValue}/${searchName}`)
            setPageValue("")
        }else{
            navigate(`/MountainListPage/${pageValue}`)
            setPageValue("")
        }
    }

    const movePageEnter = (e) => {
        if(e.key === "Enter"){
            movePage()
        }
    }

    return (
        <div className="Pagination-container">
            <ul>
                <li className={`move ${noPrevious && "invisible"}`}>
                    {
                        searchName ?
                            <Link to={`/MountainListPage/${start - 1}/${searchName}`}>Previous</Link> :
                            <Link to={`/MountainListPage/${start - 1}`}>Previous</Link> 
                    }
                </li>
                {[...Array(pageCount)].map((item, index) => (
                    <>
                        {start + index <= totalPages && (
                            <li key={index}>
                                {
                                    searchName ?
                                        <Link className={`page ${currentPage === start + index && "active"}`} to={`/MountainListPage/${start + index}/${searchName}`}>
                                            {start + index}
                                        </Link> :
                                        <Link className={`page ${currentPage === start + index && "active"}`} to={`/MountainListPage/${start + index}`}>
                                            {start + index}
                                        </Link>
                                }
                            </li>
                        )}
                    </>
                ))}
                <li className={`move ${noNext && "invisible"}`}>
                    {
                        searchName?
                            <Link to={`/MountainListPage/${start + pageCount}/${searchName}`}>Next</Link> :
                            <Link to={`/MountainListPage/${start + pageCount}`}>Next</Link>
                    }
                </li>
            </ul>
            {
                totalPages > 1 &&
                <div className="inputBox">
                    <input
                        type="number"
                        className="pageEnter"
                        placeholder={`페이지 이동(max : ${totalPages})`}
                        value={pageValue}
                        onChange={(e) => setPageValue(e.target.value)}
                        onKeyDown={(e)=>movePageEnter(e)}
                    />
                    <button onClick={movePage}>이동</button>
                </div>
            }
        </div>
    );
}