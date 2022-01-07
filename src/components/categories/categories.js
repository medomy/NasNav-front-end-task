import React from "react";

export default function CategoriesNav(){
    const categories = ['men','women','unisex','kids','Best Sellers','New Arrivals']
    return(
        <>
        <div className=" categories-head">
            <div className="container-fluid d-flex justify-content-center align-items-center categories-wrapper">
                {categories.map((category,index)=>{
                    return (
                        <span key={index}>
                            <a href="#" className="category my-2 mx-5">{category}</a>
                        </span>
                    )
                })}
                <a href="#" className="offer my-2 mx-4">offers</a>
            </div>

        </div>
        </>
    )
}