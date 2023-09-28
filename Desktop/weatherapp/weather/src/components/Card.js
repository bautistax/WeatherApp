import React from "react";
import Loading from "./Loading/Loading.js";

const Card = ({loadingData, showData, weather, forecast}) => {

    if(loadingData){
        return <Loading />
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (
                    <div className="container">
                        <div className="mb-3 mx-auto bg-black text-lime-50">

                        </div>

                    </div>
                ):(
                    <h2 className="text-lime-50">No data available</h2>
                )
            }

        </div>
    )
};

export default Card;