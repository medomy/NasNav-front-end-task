import React, { Component, Suspense } from "react";


const LazyProductCard = React.lazy(() => {
    // simulating the loading 
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../productCard/productCard')), 1000);
    })
})

export class SimilerProducts extends Component {
    constructor() {
        super();
    }
    render() {
        // here we render icoming props from the details page
        return (
            <>
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h4 className="txt-socendry my-3">Similer Products</h4>
                            <p>You may like these products also</p>
                            <div className="row">
                                {/*this.props.products && this.props.products.map((product,index)=>{
                                return <ProductCard product={product} key={product.id} />
                            })*/}
                                {this.props.products && this.props.products.map((product, index) => {
                                    return (
                                        <>
                                            <div className="col-md-3 col-sm-6">
                                                <Suspense fallback={
                                                    <div className="spinner-border" role="status" key={product.id}>
                                                        <span className="visually-hidden" key={product.id}>Loading...</span>
                                                    </div>} key={product.id}>
                                                    <LazyProductCard product={product} key={product.id} />
                                                </Suspense>
                                            </div>

                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}