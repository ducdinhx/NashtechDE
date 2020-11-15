import React, { Component } from 'react';
import FAQService from '../services/FAQService';
class ListFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: []
        }
        this.addFAQ = this.addFAQ.bind(this);
        this.editFAQ = this.editFAQ.bind(this);
        this.deleteFAQ = this.deleteFAQ.bind(this);
    }
    componentDidMount() {
        FAQService.getAll().then((res) => {
            this.setState({ faqs: res.data })
        }).catch(e => {
            console.log(e);
        })
    }
    addFAQ() {
        this.props.history.push('/add-faq/_add');
    }
    deleteFAQ(id) {
        FAQService.remove(id).then(res => {
            this.setState({ faqs: this.state.faqs.filter(faq => faq.faqId !== id) });
        });
    }
    viewFAQ(id) {
        this.props.history.push(`/view-faq/${id}`);
    }
    editFAQ(id) {
        this.props.history.push(`/add-faq/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">FAQ List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFAQ}> Add FAQ</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Question</th>
                                <th>Answer</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.faqs.map(
                                    faq =>
                                        <tr key={faq.faqId}>
                                            <td> {faq.question} </td>
                                            <td> {faq.answer}</td>
                                            <td>
                                                <button style={{ width: "8rem" }} onClick={() => this.editFAQ(faq.faqId)} className="btn btn-info">Update </button>
                                                <button style={{ width: "8rem" }} onClick={() => this.deleteFAQ(faq.faqId)} className="btn btn-danger">Delete </button>
                                                <button style={{ width: "8rem" }} onClick={() => this.viewFAQ(faq.faqId)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

export default ListFAQ;