import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
const ProductPage = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([]);
    useEffect(() => {
        setCart(props.cart)
        retrieveProducts();
    }, []);
    const addCart = (id) => {
        const check = cart.every(item => {
            return item.productId !== id;
        })

        if (check) {
            const data = products.filter(product => {
                return product.productId === id;
            })
            setCart([...cart, ...data])
            console.log(cart);
        } else {
            alert("The Product has been add to card");
        }
    };

    const retrieveProducts = () => {
        ProductService.getAll()
            .then(response => {
                setProducts(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <React.Fragment>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-md-4" key={product.productId}>
                            <Link to={`/products/${product.productId}`}>
                                <img src={product.image} alt="" style={{width:'10rem', height:'10rem'}}/>
                            </Link>
                            <div className="box">
                                <h3 title={product.name}>
                                    <Link to={`/products/${product.productId}`}>{product.name}</Link>
                                </h3>
                                <p>{product.description}</p>
                                <h4>${product.price}</h4>
                                <button onClick={() => addCart(product.productId)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))
                }


            </div>
        </React.Fragment>


    )
};

export default ProductPage;
