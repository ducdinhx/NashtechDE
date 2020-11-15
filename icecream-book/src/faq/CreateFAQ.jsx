import React, { Component } from 'react';
import FAQService from '../services/FAQService'

class CreateFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            answer: '',
            question: ''
        }
        this.saveOrUpdateFAQ = this.saveOrUpdateFAQ.bind(this);
        this.changeAnswer = this.changeAnswer.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);

    }
    componentDidMount() {
        if (this.state === '_add') {
            return;
        } else {
            FAQService.getAll(this.state.id).then((res) => {
                let faq = res.data;
                this.setState({ answer: faq.answer, question: faq.question });
            });
        }
    }
    saveOrUpdateFAQ = (e) => {
        e.preventDefault();
        let faq = { answer: this.state.answer, question: this.state.question };
        console.log('faq => ' + JSON.stringify(faq));

        if (this.state.id === '_add') {
            FAQService.create(faq).then(res => {
                this.props.history.push('/faqs');
            });
        } else {
            FAQService.update(this.state.id, faq).then(res => {
                this.props.history.push('/faqs');
            });
        }
    }
    changeAnswer = (event) => {
        this.setState({ answer: event.target.value });
    }
    changeQuestion = (event) => {
        this.setState({ question: event.target.value });
    }
    cancel() {
        this.props.history.push('/faqs');
    }
    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add FAQ</h3>
        } else {
            return <h3 className="text-center">Updata FAQ</h3>
        }
    }


    render() {

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Question: </label>
                                        <input placeholder="Input your question" name="question" className="form-control"
                                            value={this.state.question} onChange={this.changeQuestion} />
                                    </div>
                                    <div className="form-group">
                                        <label> Answer: </label>
                                        <input placeholder="Input your anser" name="answer" className="form-control"
                                            value={this.state.answer} onChange={this.changeAnswer} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateFAQ}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateFAQ;

