import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import { Link } from "react-router-dom";
const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        retrieveProducts();
    }, []);

    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className="row">
            <Link to={"/addBook"}>
                Add Book
            </Link>
            <div className="col-md-8 offset-1">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by product name" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                            Search
                </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid offset-0">
                <table className="table table-bordered table-hover table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>produtc Id</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Description</th>
                            <th>Product detail</th>
                            <th>Upload date</th>
                            <th>Enable</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        <img src={product.image} alt="Hinh anh" width="50px" height ="50px"/>
                                    </td>
                                    <td>{product.description}</td>
                                    <td>{product.detail}</td>
                                    <td>{product.uploadDate}</td>
                                    <td>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={product.enableStatus} />
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-info">
                                            <Link to={"/product/" + product.productId}>
                                                View Detail
                                    </Link>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default ProductsList;
