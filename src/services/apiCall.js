
export const getProducts =async ()=>{
    let products = [];
    await fetch('products.json')
        .then((res)=> {return res.json()})
        .then((res)=> {
            console.log(res);
            products = res;
            console.log(products);
    }
    )
    return products;
    
}

export const getOneProduct = async (id)=>{
    let product = {};
    await getProducts()
    .then((products)=>{
        products.forEach((_product)=>{
            if (_product.id === id){
                product = _product;
            }
        })
    })
    return product;
}

export const getSimilerProducts = async (product)=>{
    let similerProducts = [];
    await getProducts()
    .then((res)=>{
        console.log(res);
        res.forEach((_product)=>{
            if(_product.company === product.company && _product.id !== product.id ){
                similerProducts.push(_product);
                console.log(similerProducts);
            }
        })
    })
    return similerProducts;

}