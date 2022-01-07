import React, { Component } from "react";
// importing of function components
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
// importing of class components
import { SimilerProducts } from "../../components/similarProducts/similerProducts";
import { ProductDetails } from "../../components/details/details";
// api call functions from the service
import { getOneProduct, getProducts, getSimilerProducts } from "../../services/apiCall";


export class ProductDetailsPage extends Component{
    constructor(){
        super();
        //initializing the states i need to render in the components
        this.state = {
            products : [],
            mainProduct : {},
            similerProducts : [],
            cartItems : [],
            totalCartItems : 0,
            cartItemQty : 1,
            cartItem : {},
            totalPrice : 0
        }
        this.getQty = this.getQty.bind(this);
        this.setTotalCartItems = this.setTotalCartItems.bind(this);
        this.setTotalPrice = this.setTotalPrice.bind(this);
        
    }
// Add to cart function essentialy gets the quantity value from the details component 
// async function for making a lot of set states and waiting for them to be set
    async getQty(_qty){
        console.log(_qty);
        // check of the cart if empty to add directly
        if(this.state.cartItems.length===0){
            await this.setState({
                ...this.state,
                cartItems : this.state.cartItems.concat({...this.state.mainProduct , qty: _qty})
            })
        }
        // check of the availibility of this product in the cart already
        else{
            await this.state.cartItems.forEach((cartItem,index)=>{
                if(cartItem.id === this.state.mainProduct.id){
                    alert('this item is already in your cart')
                }
                else{
                    console.log("from else block")
                    this.setState({
                        ...this.state,
                        cartItems : this.state.cartItems.concat({...this.state.mainProduct , qty: _qty})
                    })
                }
            })

        }
        // implementing total items that goes to header component
        this.setTotalCartItems();
        // implementing total price function 
        this.setTotalPrice();
    }
    async setTotalCartItems(){
        let total = 0;
        this.state.cartItems.forEach((cartItem,index)=>{
            total++;
        })
        await this.setState({
            ...this.state,
            totalCartItems : total
        })
    }
    async setTotalPrice(){
        let _totalPrice = 0;
        this.state.cartItems.forEach((cartItem,index)=>{
            _totalPrice += cartItem.qty * cartItem.price;
        })
        await this.setState({
            ...this.state,
            totalPrice : _totalPrice
        })
    }
    
    componentDidUpdate(){
        // checking of the changes in states
        console.log("updated",this.state.cartItems);
        console.log("updated",this.state.totalCartItems);
        console.log("updated",this.state.totalPrice);
    }

    componentDidMount(){
        //fetching data of whole products (json file in public and fetch method in services )
        getProducts()
        .then((res)=>{
            this.setState({
                ...this.state,
                products : res
            })
        })
        console.log(this.state.products);
        //fetchng data of the main product 
        getOneProduct("1").
        then((res)=>{
            this.setState({
                ...this.state,
                mainProduct : res,
            })
            //fetching similer products
        getSimilerProducts(this.state.mainProduct)
        .then((res)=>{
            console.log(res);
            this.setState({
                ...this.state,
                similerProducts : res
            })
        })
        })
    }

    render(){
        return(
            <>
            <Header cartItems= {this.state.cartItems} totalCartItems={this.state.totalCartItems} totalPrice={this.state.totalPrice}/>
            <ProductDetails product={this.state.mainProduct} addQty = {(qty)=> this.getQty(qty)} />
            <SimilerProducts products={this.state.similerProducts} />
            <Footer />
            </>
        )

    }
}