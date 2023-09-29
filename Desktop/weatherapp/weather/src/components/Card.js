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
                            <div className="row gap-0">
                                <div className="">
                                    <img src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                                </div>
                                <div className="">
                                    <div className="text-start mt-2">

                                    </div>

                                </div>

                            </div>

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