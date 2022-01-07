import React from "react";

export default function BreadCrumbs() {
    return (
        <>

            <div className="row custom-container align-items-center">
                <div className="col-2"></div>
                <div className="col-5 ">
                    <nav aria-label="breadcrumb " className="my-2 ">
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item "><a href="#">Men</a></li>
                            <li className="breadcrumb-item"><a href="#">Clothing</a></li>
                            <li className="breadcrumb-item"><a href="#">Tops</a></li>
                            <li className="breadcrumb-item"><a href="#">Adidas</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Adidas black T-shirt</li>
                        </ol>
                    </nav>

                </div>

            </div>

        </>
    )
}