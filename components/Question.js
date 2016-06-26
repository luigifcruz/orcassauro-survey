import React, { Component } from 'react'

const questions = [{
  name: "Start",
  title: "Welcome!",
  text: "",
  option: null
},{
  name: "Name",
  title: "Qual o seu nome?",
  option: "text"
},{
  name: "BirthdayPerson",
  title: "Você é o aniversariante?",
  option: "multiple"
},{
  name: "PersonName",
  title: "Qual o nome do aniversariante?",
  option: "text"
},{
  name: "PersonSex",
  title: "O aniversariante é...",
  option: "multiple"
},{
  name: "PersonAge",
  title: "Qual a idade do aniversariante?",
  option: "number"
},{
  name: "Budget",
  title: "Qual seu orçamento?",
  option: "number"
},{
  name: "Guests",
  title: "Quantas pessoas?",
  option: "number"
},{
  name: "PartyType",
  title: "Qual o tipo de festa?",
  option: "text"
},{
  name: "PartyThings",
  title: "O que não poderia faltar na sua festa?",
  option: "text"
},{
  name: "PartyDate",
  title: "Qual a data do evento?",
  option: "date"
},{
  name: "PersonMail",
  title: "Qual é o seu e-mail?",
  option: "mail"
},{
  name: "Final",
  title: "Qual é o seu e-mail?",
  text: "",
  option: null
}];

class Question extends Component {
  componentWillMount() {
    this.setState({
      questions
    });

    this.setState({
      current: questions[this.props.params.id ? this.props.params.id : 0]
    });
  }

  render() {
    return (
      <div className="Question">
        <h3>{this.state.current.title}</h3>
        <input autocomplete="off" type="text"/>
      </div>
    )
  }
}

Question.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};

export default Question
