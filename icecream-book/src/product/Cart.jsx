import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Cart(props) {
    const [cart, setCart] = useState([{}]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setCart(props.cart)
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])

    const reduction = id => {
        cart.forEach(item => {
            if (item.productId === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item => {
            if (item.productId === id) {
                item.count += 1;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item.productId === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }


    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>

    return (
        <>
            {
                cart.map(product => (
                    <div className="details cart" key={product.productId}>
                        <div className="img-container"
                            style={{ backgroundImage: `url(${product.image})` }} />

                        <div className="box-details">
                            <h2 title={product.name}>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <p>{product.detail}</p>

                            <div className="amount">
                                <button className="count" onClick={() => reduction(product.productId)}> - </button>
                                <span>{product.count}</span>
                                <button className="count" onClick={() => increase(product.productId)}> + </button>
                            </div>

                            <div className="delete" onClick={() => removeProduct(product.productId)}>X</div>
                        </div>

                    </div>
                ))
            }

            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: $ {total}</h3>
            </div>
        </>
    )
}
