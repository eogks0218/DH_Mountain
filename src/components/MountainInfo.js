import React from 'react';
import { useSelector } from 'react-redux';
// import KakaoMap from './common/KakaoMap';
import Weather from './common/Weather';
import '../scss/MountainInfo.scss';

export default function MountainInfo() {
    const select_mountain = useSelector((state) => state.mountain.selectMountain);

    return (
        select_mountain && (
            <div className="MountainInfo-container">
                <div className="column">
                    <div className="post-module">
                        <div className="thumbnail">
                            <div className="imgDiv" style={{ backgroundImage: `url(${select_mountain.mntnattchimageseq})` }} />
                        </div>
                        <div className="post-content">
                            <div className="mntninfohght">{select_mountain.mntninfohght}m</div>
                            <h1 className="mntnnm">{select_mountain.mntnnm}</h1>
                            <h2 className="mntnsbttlinfo">{select_mountain.mntnsbttlinfo}</h2>
                            <div className="description">
                                {select_mountain.mntninfodtlinfocont.replace(/&amp;nbsp;/g, ' ').split('&lt;br /&gt;').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph.replace(/<BR>/g, '\n')}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="column2">
                    <div className="address">
                        <h1>{select_mountain.mntninfopoflc}</h1>
                    </div>
                    <div className='weather'>
                        <Weather />
                    </div>
                </div>
            </div>
        )
    );
}