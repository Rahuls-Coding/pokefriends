import React from "react";

const Card = ({ name, move, weight}) => { 
    return(
        <div >
            <div className="p-5">
                <div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-lg bg-white border-2 border-sky-500">
                    <div className="px-20 py-8 text-l">
                        <div>
                            <h2>My Name is <strong>{name}</strong>!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-lg bg-white border-2 border-sky-500">
                    <div className="py-8 px-20 text-l ">
                        <div>
                            <h2>I can <strong>{move}</strong>!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-lg bg-white border-2 border-sky-500">
                    <div className="py-8 px-20 text-l">
                        <div>
                            <h2>I weight <strong>{weight}</strong> lbs!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    )
}

export default Card;