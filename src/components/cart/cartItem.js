import React from "react";

export default function CartItem(props){
    const{product} = props;
    return(
        <>
        <div className="cart-card">
            <div className="row">
                <div className="col-4">
                    <figure className="img-wrapper">
                        <img src={product.mainImage} alt=""/>
                    </figure>
                </div>
                <div className="col-8 d-flex flex-column justify-content-evenly">
                    <p className="cartItem-title">{product.title}</p>
                    <p>Quantity : {product.qty}</p>
                    <div className="d-flex align-items-center text-center justify-content-evenly">
                        <p className="txt-socendry">{product.price}</p>
                        <span className="btn cbg-primary cart-btn">
                            remove
                        </span>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}