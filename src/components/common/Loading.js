import "../../scss/Loading.scss";

export default function Loading(){
    return(
        <div className="Loading-container">
            <div className="cube-wrapper">
                <div className="cube-folding">
                    <span className="leaf1"></span>
                    <span className="leaf2"></span>
                    <span className="leaf3"></span>
                    <span className="leaf4"></span>
                </div>
                <span className="loading" dataName="Loading">Loading</span>
            </div>
        </div>
    )
}