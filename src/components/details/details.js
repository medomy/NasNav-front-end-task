import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export class ProductDetails extends Component {
    constructor() {
        super();
        this.state = {
            qtycounter : 1,
        }
        this.increaseQty = this.increaseQty.bind(this);
        this.decreaseQty = this.decreaseQty.bind(this);
    }
// incrementing quantity func
    increaseQty(){
        this.setState({
            ...this.state,
            qtycounter : this.state.qtycounter += 1
        })
        console.log(this.state.qtycounter);
    }
// decrementing quantity func
    decreaseQty(){
        this.setState({
            ...this.state,
            qtycounter : this.state.qtycounter === 1 ? 1 : this.state.qtycounter -= 1
        })
        console.log(this.state.qtycounter);
    }
// used didMount to set an img state while testing but never used
    componentDidMount(){
        
        
    }


    render() {
        // consoles for testing incoming props
        console.log(this.props.product);
        console.log(this.props.product.mainImage);

        return (
            <>
                <div className="container-fluid my-2">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-sm-9 me-2">
                            <figure className="img-wrapper">
                                {this.props.product.mainImage &&
                                 <img
                                    src={this.props.product.mainImage}
                                    className="main-img"
                                    alt="addidas T-shirt"
                                />}
                                {/*<img
                                    src={this.state.mainImg}
                                    className="main-img"
                                    alt="addidas T-shirt"
                                />*/}
                                <div className="rotate-sqr">
                                    <img
                                        src="images/rotation.svg"
                                        alt="rotation"
                                    />
                                </div>
                            </figure>
                            <div className="d-flex align-items-center me-2">
                                <span className="btn">
                                    <img
                                        src="images/button-previous.svg" />
                                </span>
                                {this.props.product.soconderyImages && this.props.product.soconderyImages.map((img,index) => {
                                    return (
                                        <figure key={index} className="me-1">
                                            <img
                                                className="slide"
                                                src={img.source} />
                                        </figure>
                                    )
                                })}

                                <span className="btn ">
                                    <img
                                        src="images/button-next.svg" />
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-9 ms-2">
                            <figure className="companys-logo">
                                <img
                                    src={this.props.product.companyslogo} />
                            </figure>
                            <h4 className="mb-1">
                                {this.props.product.title}
                            </h4>
                            <p className="mb-3 txt-grey">Men</p>
                            <div className="d-flex">
                                <div className="mx-2">
                                    <AiFillStar className="gold" />
                                    <AiFillStar className="gold" />
                                    <AiFillStar className="gold" />
                                    <AiFillStar className="gold" />
                                    <AiOutlineStar />
                                </div>
                                <p className="mx-2">{this.props.product.rate} of 5</p>
                                <p className="mx-2">22 Rates</p>
                            </div>
                            <div className="d-flex">
                                <h3 className="txt-socendry mx-3">{this.props.product.price}</h3>
                                <p className="real-price mx-3">9,999</p>
                                <div className=" mx-3">
                                    <p className="off-div cbg-primary">30% off</p>
                                </div>
                            </div>
                            <div className="size-sec pb-3">
                                <p className="title">size</p>
                                <div className="d-flex tab-area">
                                    <span className="round-tab btn txt-socendry mx-2 text-center">
                                        small
                                    </span>
                                    <span className="round-tab btn txt-socendry mx-2 text-center">
                                        medium
                                    </span>
                                    <span className="round-tab btn txt-socendry active mx-2 text-center">
                                        large
                                    </span>
                                    <span className="round-tab btn txt-socendry mx-2 text-center">
                                        x large
                                    </span>
                                    <span className="round-tab btn txt-socendry mx-2 text-center">
                                        xx large
                                    </span>
                                </div>

                            </div>
                            <div className="color-sec my-2 pb-3">
                                <p className="title">Color</p>
                                <div className="d-flex ">
                                    <div className="btn round-color mx-2 ">
                                        <img
                                            className="round-color"
                                            src="images/color1.png"
                                        />

                                    </div>
                                    <div className="btn round-color mx-2 ">
                                        <img
                                            className="round-color"
                                            src="images/color2.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="title">Quantity</p>
                            <div className="row">
                                <div className="quantity-holder d-flex col-5">
                                    <span className="btn plus-btn cbg-primary d-flex justify-content-center align-items-center" onClick={this.increaseQty}>
                                        <img
                                            src="images/plus.svg"
                                        />

                                    </span>
                                    <div className="round-qty d-flex justify-content-center align-items-center text-center">
                                        <p>{this.state.qtycounter}</p>
                                    </div>
                                    <span className="btn minus-btn cbg-primary text-center d-flex justify-content-center align-items-center" onClick={this.decreaseQty}>
                                        <img
                                            src="images/minus.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="row mt-3">

                                <span className="btn txt-white cbg-socendry btn-cart col-5 me-1" onClick={()=>this.props.addQty(this.state.qtycounter)}>
                                    Add To Cart
                                </span>


                                <span className="btn txt-black cbg-primary btn-cart col-5 ms-1" >
                                    Pickup From Store
                                </span>

                            </div>


                        </div>
                    </div>
                </div>

            </>
        )

    }
}