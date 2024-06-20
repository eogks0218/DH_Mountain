import { useState } from "react";
import { Link } from "react-router-dom";
import SampleMountainData from "../sample/MountainData.json";
import "../scss/FamousMountain.scss";

export default function FamousMountain() {
    const [activeTab, setActiveTab] = useState(0);
    const [transition, setTransition] = useState(false);

    const FamousMountainList = SampleMountainData.response.body.items.item.filter(
        mountain => mountain.hndfmsmtnslctnrson !== "&amp;nbsp;"
            && mountain.hndfmsmtnslctnrson !== "<p>&nbsp;</p>"
            && mountain.hndfmsmtnslctnrson !== "&amp;#160;"
            && mountain.hndfmsmtnslctnrson !== " "
            && mountain.hndfmsmtnslctnrson !== "&nbsp;"
    );

    const handleTabClick = (index) => {
        if (index !== activeTab) {
            setTransition(true);
            setTimeout(() => {
                setActiveTab(index);
                setTransition(false);
            }, 1000); // 애니메이션 시간과 동일하게 설정
        }
    };

    return (
        <div className="FamousMountain-container">
            <div className="tab">
                <ul className="tabs">
                    <li className={activeTab === 0 ? "current" : ""}>
                        <Link to="#" onClick={() => handleTabClick(0)}>ㄱ~ㄹ</Link>
                    </li>
                    <li className={activeTab === 1 ? "current" : ""}>
                        <Link to="#" onClick={() => handleTabClick(1)}>ㅁ~ㅇ</Link>
                    </li>
                    <li className={activeTab === 2 ? "current" : ""}>
                        <Link to="#" onClick={() => handleTabClick(2)}>ㅈ~ㅎ</Link>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tabs_item ${activeTab === 0 ? 'active' : ''} ${transition ? 'fade' : ''}`} style={{textAlign:"left"}}>
                        {FamousMountainList.slice(0, 29).map((item, index) => (
                            <p key={index}>{item.mntnnm}</p>
                        ))}
                    </div>
                    <div className={`tabs_item ${activeTab === 1 ? 'active' : ''} ${transition ? 'fade' : ''}`} style={{textAlign:"center"}}>
                        {FamousMountainList.slice(29, 69).map((item, index) => (
                            <p key={index}>{item.mntnnm}</p>
                        ))}
                    </div>
                    <div className={`tabs_item ${activeTab === 2 ? 'active' : ''} ${transition ? 'fade' : ''}`} style={{textAlign:"right"}}>
                        {FamousMountainList.slice(69).map((item, index) => (
                            <p key={index}>{item.mntnnm}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}