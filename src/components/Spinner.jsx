import React from "react";
import Loading from './loading.gif'

function Spinner(){
    return(
        <div className="text-center">
            <img src={Loading} alt="Loading..."></img>
        </div>
    );
}

export default Spinner;