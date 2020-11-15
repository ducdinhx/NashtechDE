import React, { createContext, useState, useEffect } from 'react'
import ProductService from '../services/ProductService';
export const ProductContent = createContext();
export const ProductProvider = (props) => {
    const [products, setPoducts] = useState([{}]);
    const setListProduct = () => {
        ProductService.getAll().then(res => {
            setPoducts(res.data);
        }).catch(e => {
            console.log(error);
        })
    }

    const [cart, setCart] = useState([])
    const addCart = (id) => {
        const check = cart.every(item => {
            return item.productId !== id;
        })

        if (check) {
            const data = products.filter(product => {
                return product.productId === id;
            })
            setCart([...cart, ...data])
        } else {
            alert("The Product has been add to card");
        }
    };
    useEffect(() => {
        setListProduct();
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart])

    const value = {
        products: [products, setPoducts],
        cart: [cart, setCart],
        addCart: addCart
    }


    return (
        <ProductContent.Provider value={value}>
            {prosps.children}
        </ProductContent.Provider>
    )
}