import "../scss/SearchMountain.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchMountain(){

    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const inputElement = inputRef.current;

        const handleFocus = () => {
            inputElement.parentElement.classList.add('active');
        };

        const handleBlur = () => {
            if (inputElement.value.length === 0) {
                inputElement.parentElement.classList.remove('active');
            }
        };

        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        // 컴포넌트가 언마운트 될 때 이벤트 리스너를 정리합니다.
        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    const searchClick = () => {
        navigate(`/MountainListPage/1/${searchValue}`)
    }

    const searchEnter = (e) => {
        if(e.key === "Enter"){
            searchClick();
        }
    }

    return(
        <div className="SM-container">
            <div className="bg">
                <div className="search-box">
                    <label className="search" for="input_search">
                        <input
                            id="input_search"
                            type="text"
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e)=> searchEnter(e)}
                        />
                    </label>
                    {
                        searchValue.length > 0 && (
                            <div className="button-box">
                                <button className="btn" onClick={searchClick}>Search</button>
                            </div>
                        )
                    }
                </div>
                <div className="mountain">
                    <div className="mountain-top">
                        <div className="mountain-cap-1"></div>
                        <div className="mountain-cap-2"></div>
                        <div className="mountain-cap-3"></div>
                    </div>
                </div>
                <div className="mountain-two">
                    <div className="mountain-top">
                        <div className="mountain-cap-1"></div>
                        <div className="mountain-cap-2"></div>
                        <div className="mountain-cap-3"></div>
                    </div>
                </div>
                <div className="mountain-three">
                    <div className="mountain-top">
                        <div className="mountain-cap-1"></div>
                        <div className="mountain-cap-2"></div>
                        <div className="mountain-cap-3"></div>
                    </div>
                </div>
                <div className="cloud"></div>
            </div>
        </div>
    )
}