import React from 'react'
import { Jumbotron } from "react-bootstrap";

const Wellcome = () => {
    return (
        <div>
            <Jumbotron className="bg-white text-black">
                <h1>Wellcome to Book shop</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                        “Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”
                    </p>
                    <footer className="blockquote-footer">
                        Charles W. Eliot
                    </footer>

                </blockquote>

            </Jumbotron>

        </div>
    )
}

export default Wellcome
