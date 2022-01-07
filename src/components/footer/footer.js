import React from "react";

export default function Footer() {
    return (
        <>
            <section className="footer container-fluid py-4">
                <div className="row justify-content-center  ">
                    <div className="col-9 ">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 mx-1 line-footer-border mb-3">
                                <figure className="logo-wrapper">
                                    <img
                                        src="images/big-logo.svg"
                                        alt="logo" />
                                </figure>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolo
                                    </p>
                                </div>

                            </div>
                            
                            <div className="col-md-6 col-sm-12 mx-1">
                                <h5>Subscribe to our newsletter</h5>
                                <form className="mb-3 footer-form">
                                    
                                        <input type="email" className="form-control email-round" placeholder="Enter your E-mail" />
                                        <span className="btn cbg-primary round-btn">Subscribe <span><img src="images/subscribe-icon.svg" /></span></span>
                                    
                                </form>
                                <div className="row">
                                    <div className="col-7 line-footer-border">
                                        <ul className="">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Track Order</a></li>
                                            <li><a href="#">Terms and conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Sell with Us</a></li>
                                            <li><a href="#">Shipping and returns</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-4">
                                        <ul>
                                            <li className="my-2"><a href="#"><span><img src="images/facebook.svg"/> </span>/YESHTERY</a></li>
                                            <li className="my-2"><a href="#"><span><img src="images/linkedIn.svg"/> /YESHTERY</span></a></li>
                                            <li className="my-2"><a href="#"><span><img src="images/instagram.svg"/> /YESHTERY</span></a></li>
                                            <li className="my-2"><a href="#"><span><img src="images/twitter.svg"/> /YESHTERY</span></a></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row justify-content-evenly mt-4 top-line-border">
                            <div className="col-md-4 col-sm-8">
                                <p className="copyrights">© 2021 yeshtery, all rights reserved.</p>
                            </div>
                            <div className="col-md-4 col-sm-8">
                                <span className="mx-1"><img src="images/cash.png"/></span>
                                <span className="mx-1"><img src="images/visa.png"/></span>
                                <span className="mx-1"><img src="images/master.png"/></span>
                            </div>
                            <div className="col-md-4 col-sm-8">
                                <p>Powered by <span><img src="images/nasnavlogo.png"/></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}