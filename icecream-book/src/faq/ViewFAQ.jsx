import React, { Component } from 'react'
import FAQService from '../services/FAQService';
class ViewFAQ extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            faq: {}
        }
    }

    componentDidMount(){
        FAQService.getById(this.state.id).then( res => {
            this.setState({faq: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View FAQ Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> faq question: </label>
                            <div> { this.state.faq.question }</div>
                        </div>
                        <div className = "row">
                            <label> faq anwser: </label>
                            <div> { this.state.faq.answer }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFAQ;
