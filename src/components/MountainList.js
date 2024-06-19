import "../scss/MountainList.scss"
import React from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function MountainList({pageNo, searchName}){
    const sliceMountainList = useSelector(state => state.mountain.sliceMountainList)
    const errorHandler = useSelector(state => state.mountain.error)
    const navigate = useNavigate();

    if(errorHandler) return <div>{errorHandler}</div>

    if (!sliceMountainList || sliceMountainList.length === 0) {
        return <div>No mountain data available.</div>;
    }

    return(
        <div className="MountainList-container">
            { sliceMountainList.length ? 
                sliceMountainList.map(item => {
                    return(
                        <div className="course">
                            <div className="course-preview" style={{backgroundImage:`url(${item.mntnattchimageseq})`}}></div>
                            <div className="course-info">
                                <div className="progress-container">
                                    <div className="progress"></div>
                                    <span className="progress-text">{item.mntninfopoflc}</span>
                                </div>
                                <h6>{item.mntnsbttlinfo}</h6>
                                <h2>{item.mntnnm}</h2>
                                <button
                                    className="btn"
                                    onClick={searchName ? ()=>navigate(`/MountainInfoPage/${pageNo}/${searchName}/${item.mntnid}`) : ()=>navigate(`/MountainInfoPage/${pageNo}/${item.mntnid}`)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    )
                }) :
                <div className="course">
                    <div className="course-preview" style={{backgroundImage:`url(${sliceMountainList.mntnattchimageseq})`}}></div>
                    <div className="course-info">
                        <div className="progress-container">
                            <div className="progress"></div>
                            <span className="progress-text">{sliceMountainList.mntninfopoflc}</span>
                        </div>
                        <h6>{sliceMountainList.mntnsbttlinfo}</h6>
                        <h2>{sliceMountainList.mntnnm}</h2>
                        <button
                            className="btn"
                            onClick={searchName ? ()=>navigate(`/MountainInfoPage/${pageNo}/${searchName}/${sliceMountainList.mntnid}`) : ()=>navigate(`/MountainInfoPage/${pageNo}/${sliceMountainList.mntnid}`)}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}