import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import CategoriesNav from "../categories/categories";
import NavbarComponent from "../navbar/navbar";
import { SocendNavbar } from "../socendNavbar/socendNavbar";

export default function Header(props){
    const {cartItems , totalCartItems , totalPrice} = props;
    return(
        <>
        <NavbarComponent/>
        <SocendNavbar cartItems= {cartItems} totalCartItems={totalCartItems} totalPrice={totalPrice}/>
        <CategoriesNav />
        <BreadCrumbs />
        </>
    )
}