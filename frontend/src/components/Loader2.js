import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader2 = () => {
    return (
        <div className="loader-wrapper">
            {/* <Loader type="Audio" color="#00BFFF" height={80} width={80} />
            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
            <Loader type="Rings" color="#00BFFF" height={80} width={80} />
            <Loader type="TailSpin" color="#3777FF" height={80} width={80} /> */}
            <Loader type="ThreeDots" color="#3777FF" height={80} width={80} className="loader2"/>
        </div>
    )
}

export default Loader2
