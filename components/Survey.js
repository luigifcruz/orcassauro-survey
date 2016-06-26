import React, { Component } from 'react'
import '../stylesheet/Survey.scss'
import Confetti from 'react-confetti'
import { Questions } from './Questions'

class Survey extends Component {
  componentWillMount() {
    this.setState({
      confetti: false,
      current: Questions[this.props.params.id ? this.props.params.id : 0],
      backButton: false,
      nextButton: true,
      doneButton: false
    });
    this.loadHandler(this.props);
  }

  componentWillReceiveProps(props) {
    this.loadHandler(props);
  }

  loadHandler(props) {
    const id = parseInt(props.params.id);
    this.setState({
      current: Questions[id ? id : 0],
      backButton: (id > 0) && (id < Questions.length - 1) ? true : false,
      nextButton: (id < Questions.length - 2) ? true : false,
      doneButton: (id > Questions.length - 3) && (id != Questions.length - 1) ? true : false,
      confetti: (id == Questions.length - 1) ? true : false,
    });
  }

  nextQuestion() {
    let nextNumber = parseInt(this.props.params.id) + 1;
    if (nextNumber > Questions.length - 1) {
      nextNumber = Questions.length - 1;
    }
    this.context.router.push(`/survey/${nextNumber}`);
  }

  lastQuestion() {
    let nextNumber = parseInt(this.props.params.id) - 1;
    if (nextNumber < 0) {
      nextNumber = Questions.length + 1;
    }
    this.context.router.push(`/survey/${nextNumber}`);
  }

  render() {
    return (
      <div>
        {this.state.confetti ?
          <Confetti/> :
          null
        }
        <center>
          <h1>Orçassauro</h1>
          <h4>Sua festa dentro do seu orçamento!</h4>
        </center>
        <div className="Card">
          <img src="../orcassauro.png"></img>
          {React.cloneElement(this.props.children, {
            question: this.state.current
          })}
          <div className="Handler">
            <div className="box"/>
            {this.state.doneButton ?
              <button className="send" onClick={this.nextQuestion.bind(this)}>Enviar!</button> :
              null
            }
            {this.state.nextButton ?
              <button className="next" onClick={this.nextQuestion.bind(this)}>Próximo</button> :
              null
            }
            {this.state.backButton ?
              <button className="back" onClick={this.lastQuestion.bind(this)}>Voltar</button> :
              null
            }
          </div>
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
