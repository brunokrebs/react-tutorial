import React, {Component} from 'react';
import axios from 'axios';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const question = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
    this.setState({
      question,
    });
  }

  render() {
    const {question} = this.state;
    if (question === null) return <p>Loading ...</p>;
    console.log(question);
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{question.title}</h1>
            <p className="lead">{question.description}</p>
            <hr className="my-4" />
            <p>Answers:</p>
            <p className="lead">
              {
                question.answers.map((answer, idx) => (
                  <p key={idx}>{answer.answer}</p>
                ))
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Answers;
