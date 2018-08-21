import React, {Component} from 'react';
import axios from 'axios';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null,
    };
  }

  async componentDidMount() {
    const questions = (await axios.get('http://localhost:8081/')).data;
    this.setState({
      questions,
    });
  }

  render() {
    console.log(this.state.questions);
    return (
      <div className="questions">
        {this.state.questions === null && <p>Loading questions...</p>}
        {
          this.state.questions &&
          <ul>
            {
              this.state.questions.map(question => (
                <li key={question.id}>{question.title}</li>
              ))
            }
          </ul>
        }
      </div>
    )
  }
}

export default Questions;
