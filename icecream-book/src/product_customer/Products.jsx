import React, { useContext } from 'react'
import { ProductProvider } from "../global_context/ProductProvider";
import { Link } from "react-router-dom";
const Products = () => {
    const value = useContext(ProductProvider);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
        <div>
            <div className="col-md-4">
                {
                    products.map(product => {
                        <div className="card" key={product.produtId}>
                            <Link to={`products/${product.produtId}`}>
                                <img src={product.image} alt="Image Product" />
                            </Link>
                            <div className="box">
                                <h3 title={product.name}></h3>
                                <Link to ={`/product/${product.productId}`}>{product.name}</Link>

                            </div>

                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default Products
