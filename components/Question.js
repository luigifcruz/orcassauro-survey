import React, { Component } from 'react'

class Question extends Component {
  componentWillMount() {
    this.setState({
      saying: "Hello!"
    });
  }

  render() {
    return (
      <div className="Question">
        <h3>{this.props.question.sayings[this.props.question.sayings.length - 1].text}</h3>
          {(() => {
          switch (this.props.question.option) {
            case "text": return <input autocomplete="off" type="text"/>;
            case "textbox": return this.props.question.data;
            case "multiple": return (
              <select>
                {this.props.question.data.map((object) => {
                    return <option>{object}</option>;
                })}
              </select>
            );
            default: return null;
          }
        })()}
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
