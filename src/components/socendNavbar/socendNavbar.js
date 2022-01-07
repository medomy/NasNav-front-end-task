import React, { Component } from "react";
// importing Drawer
import Drawer from 'react-modern-drawer';
// importing Drawer's style
import 'react-modern-drawer/dist/index.css'
import CartItem from "../cart/cartItem";

export class SocendNavbar extends Component {
    constructor() {
        super();
        this.state = {
            isDrawerOpen: false
        }
        // to bind function to this (doesn't work unless !!!!)
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    // function to open or close Cart drawer

    toggleDrawer() {
        this.setState({
            ...this.state,
            isDrawerOpen: this.state.isDrawerOpen === false ? true : false
        })
        console.log(this.state.isDrawerOpen);
    }

    render() {
        return (
            <>
                <div className="container-lg ">
                    <div className="row align-items-center justify-content-evenly">
                        <form className="col-md-3 col-sm-8 d-flex position-relative my-2 ms-5 me-4">
                            <button className="btn position-absolute search-btn" type="submit">
                                <img src="images/search.svg" alt="search" />
                            </button>
                            <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="col-md-2 col-sm-6 d-flex align-ittems-center justify-content-center my-2 me-2">
                            <img
                                src={"images/addidas.svg"}
                                alt="adidas logo" />
                        </div>
                        <nav className="col-md-4 col-sm-6 d-flex justufy-content-evenly my-2 ms-5">

                            <span className="me-1 nav-item btn position-relative " onClick={this.toggleDrawer} >

                                <img
                                    src="images/cart.svg" />
                                Cart

                                <span className="position-absolute  translate-middle badge rounded-pill cbg-primary">
                                    {this.props.totalCartItems}
                                    <span className="visually-hidden">Cart</span>
                                </span>
                            </span>
                            {/* drawer here */ }
                            <Drawer open={this.state.isDrawerOpen} onClose={this.toggleDrawer} direction='right' size={425}>
                                <button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={this.toggleDrawer} ></button>
                                <div className="row justify-content-center text-center mb-4">
                                    <h4 className="txt-socendry my-3">My Cart</h4>
                                </div>
                                <div className="row justify-content-center">
                                    <h6 className="mb-3">Cart Summary</h6>
                                    {this.props.cartItems && this.props.cartItems.map((cartItem) => {
                                        return (
                                            <CartItem product={cartItem} key={cartItem.id} />
                                        )
                                    })}
                                </div>
                                <div className="row justify-content-center text-center my-3">
                                    <h5>Total : {this.props.totalPrice} LE</h5>
                                </div>
                                <div className="row justify-content-evenly">
                                    <span className="col-5 btn drawer-btn cbg-primary">
                                        Review Cart
                                    </span>
                                    <span className="col-5 btn drawer-btn cbg-socendry txt-white">
                                        Complete checkout
                                    </span>
                                </div>

                            </Drawer>

                            <a className="nav-link" href="#">
                                <span className="me-1">
                                    <img
                                        src="images/wishlist.svg" />
                                </span>
                                wishlist
                            </a>
                            <a className="nav-link" href="#">
                                <span className="me-1">
                                    <img
                                        src="images/login.svg" />
                                </span>
                                login
                            </a>

                        </nav>

                    </div>


                </div>
            </>
        )
    }
}

/*export default function SocendNavbar() {
    return (
        <>

            <div className="container-lg ">
                <div className="row align-items-center justify-content-evenly">
                    <form className="col-3 d-flex position-relative my-2 ms-5 me-4">
                        <button className="btn position-absolute search-btn" type="submit">
                            <img src="images/search.svg" alt="search" />
                        </button>
                        <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className="col-2 d-flex align-ittems-center justify-content-center my-2 me-2">
                        <img
                            src={"images/addidas.svg"}
                            alt="adidas logo" />
                    </div>
                    <nav className="col-4 d-flex justufy-content-evenly my-2 ms-5">

                        <span className="me-1 nav-item dropdown position-relative " >
                            
                                <img
                                    src="images/cart.svg" />
                                Cart
                            
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill cbg-primary">
                                0
                                <span className="visually-hidden">Cart</span>
                            </span>
                            

                        </span>

                        <a className="nav-link" href="#">
                            <span className="me-1">
                                <img
                                    src="images/wishlist.svg" />
                            </span>
                            wishlist
                        </a>
                        <a className="nav-link" href="#">
                            <span className="me-1">
                                <img
                                    src="images/login.svg" />
                            </span>
                            login
                        </a>

                    </nav>

                </div>


            </div>




        </>
    )
}*/