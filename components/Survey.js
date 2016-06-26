import React, { Component } from 'react'
import '../stylesheet/Survey.scss'
import Confetti from 'react-confetti'

class Survey extends Component {

  nextQuestion() {

  }

  render() {
    return (
      <div>
        <center>
          <h1>Orçassauro</h1>
          <h4>O Sonho dos pequenos bem mais fácil pros grandões!</h4>
        </center>
        <div className="Card">
          <img src="../dinossauro.jpg"></img>
          {React.cloneElement(this.props.children, {})}
          <button onClick={this.nextQuestion.bind(this)}>Próxima Pergunta</button>
        </div>
      </div>
    )
  }
}

Survey.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};

export default Survey
