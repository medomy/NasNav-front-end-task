import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

/*export class ProductCard extends Component{
    constructor(){
        this.state = {
            product : {}
        }

    }
    componentDidMount(){
        this.setState({
            product : this.props.product
        })

    }

    render(){
        return(
            <>
            <div className="costum-card me-1">
                <figure>
                    <img
                        src={product.mainImg} 
                        alt="product-img"
                        className="mainImg"/>
                </figure>
                <div className="rotate-sqr">
                    <img
                        src="images/rotation.svg"
                        alt="rotation"
                    />
                </div>
                <h6 className="costum-card-title">{product.title}</h6>
                <div className="d-flex justify-content-between align-items-evenly">
                    <p className="txt-socendry">{product.price} L.E</p>
                    <img src={product.companyslogo} />
                </div>
                <div className="d-flex justify-content-center">

                    <div className="mx-2">
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiOutlineStar />
                    </div>
                    <p className="mx-2">{product.rate} of 5</p>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <p>From : <span className="imptnt">Egypt</span></p>
                    </div>
                    <div>
                        <p>To : <span className="imptnt">Egypt</span></p>
                    </div>
                    <div>
                        <p>in : <span className="imptnt">2 days</span></p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}*/

export default function ProductCard(props) {
    const{product} = props;
    return (
        <>
            <div className="costum-card me-1">
                <figure>
                    {product.mainImage &&
                        <img
                        src={product.mainImage} 
                        alt="product-img"
                        className="mainImg"/>
                    }
                    
                </figure>
                <div className="rotate-sqr">
                    <img
                        src="images/rotation.svg"
                        alt="rotation"
                    />
                </div>
                <h6 className="costum-card-title">{product.title}</h6>
                <div className="d-flex justify-content-between align-items-evenly">
                    <p className="txt-socendry">{product.price} L.E</p>
                    <img src={product.companyslogo} />
                </div>
                <div className="d-flex justify-content-center">

                    <div className="mx-2">
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiFillStar className="gold" />
                        <AiOutlineStar />
                    </div>
                    <p className="mx-2">{product.rate} of 5</p>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <p>From : <span className="imptnt">Egypt</span></p>
                    </div>
                    <div>
                        <p>To : <span className="imptnt">Egypt</span></p>
                    </div>
                    <div>
                        <p>in : <span className="imptnt">2 days</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}