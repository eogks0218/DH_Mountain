import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import KakaoMap from './common/KakaoMap';
import Weather from './common/Weather';
import '../scss/MountainInfo.scss';
import { Link } from 'react-router-dom';
import { HiCursorClick } from "react-icons/hi";
import SelectDate from './common/SelectDate';

function convertHtmlStringToText(htmlString) {
    return htmlString
        .replace(/&amp;nbsp;/g, ' ')
        .replace(/&lt;br ?\/&gt;/g, '\n')
        .replace(/<br ?\/?>/g, '\n')
        .replace(/<p>/g, '')
        .replace(/<\/p>/g, '')
        .replace(/&gt;/g, '>')
        .replace(/&amp;#160;/g, ' ')
        .replace(/<BR>/g, '\n')
        .replace(/<P>/g, '')
        .replace(/<\/P>/g, '')
        .replace(/&nbsp;/g, ' ')
}

export default function MountainInfo() {
    const select_mountain = useSelector((state) => state.mountain.selectMountain);

    const [isSelectedDate, setIsSelectedDate] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const DateClick = () => {
        setIsSelectedDate(true);
    }

    const handleCancel = () => {
        setIsSelectedDate(false);
    }

    const handleDate = (newValue) => {
        setSelectedDate(newValue)
    }

    return (
        select_mountain && (
            <div className='MountainInfo-container'>
                <section id="timeline">
                    <h1>{select_mountain.mntnnm}</h1>
                    <p className='leader'>{select_mountain.mntnsbttlinfo}</p>
                    <div className='demo-card-wrapper'>
                        <div className='demo-card demo-card--step1'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>01</span>
                                </div>
                                <h2><span className='small'>Details</span>상세정보내용</h2>
                            </div>
                            <div className='body'>
                                <p>
                                    {convertHtmlStringToText(select_mountain.mntninfodtlinfocont).split('\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <img src={select_mountain.mntnattchimageseq} alt="Graphic"/>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step2'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>02</span>
                                </div>
                                <h2><span className='small'>Mountain Height</span>{select_mountain.mntninfohght.toLocaleString()} m</h2>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step3'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>03</span>
                                </div>
                                <h2><span className='small'>Traffic Information</span>교통정보</h2>
                            </div>
                            <div className='body'>
                                <p>
                                    {convertHtmlStringToText(select_mountain.pbtrninfodscrt).split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step4'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>04</span>
                                </div>
                                <h2><span className='small'>Tourism Information</span>주변관광정보설명</h2>
                            </div>
                            <div className='body'>
                                <p>
                                    {convertHtmlStringToText(select_mountain.crcmrsghtnginfodscrt).split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step5'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>05</span>
                                </div>
                                <h2><span className='small'>Course Description</span>코스설명</h2>
                            </div>
                            <div className='body'>
                                <p>
                                    {convertHtmlStringToText(select_mountain.crcmrsghtnginfoetcdscrt).split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step6'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>06</span>
                                </div>
                                <h2><span className='small'>The Reason For The Top 100</span>100대명산 선정이유</h2>
                            </div>
                            <div className='body'>
                                <p>
                                    {convertHtmlStringToText(select_mountain.hndfmsmtnslctnrson).split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                                <img src={select_mountain.hndfmsmtnmapimageseq} alt="X"/>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step7'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>07</span>
                                </div>
                                <h2><span className='small'>Download</span>산정보지도다운로드파일</h2>
                            </div>
                            <div className='body'>
                                <Link to={select_mountain.mntninfomapdnldfilenm}>
                                    {select_mountain.mntninfomapdnldfilenm}
                                </Link>
                            </div>
                        </div>
                        <div className='demo-card demo-card--step8'>
                            <div className='head'>
                                <div className='number-box'>
                                    <span>08</span>
                                </div>
                                <h2><span className='small'>Weather</span>날씨정보<p className='DateButton' onClick={DateClick}>📅<HiCursorClick /></p></h2>
                            </div>
                            <div className='body'>
                                <p style={{textAlign:"center"}}>{select_mountain.mntninfopoflc}</p>
                                <Weather selectedDate={selectedDate}/>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    isSelectedDate &&
                        <SelectDate
                            handleCancel={handleCancel}
                            handleDate={handleDate}
                        />
                }
            </div>
        )
    );
}