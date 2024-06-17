import "../../scss/Footer.scss";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer(){
    useEffect(()=>{
        const handleScroll = () => {
            const backToTop = document.querySelector(".back-to-top");
            if(backToTop){
                const scrollTop = document.documentElement.scrollTop;
                if(scrollTop > 100){
                    backToTop.classList.add("show");
                }else{
                    backToTop.classList.remove("show");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const moveScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <>
            <button type="button" className="back-to-top" onClick={moveScroll}>
                <IoIosArrowUp />
            </button>
        </>
    )
}