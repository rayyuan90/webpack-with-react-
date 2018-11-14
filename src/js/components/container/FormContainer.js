import React, { Component } from "react";
import Input from "../presentational/Input";
import config from './../../../config.json';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    console.log(config);
    return (
      <form id="article-form">
        <Input
          text={config.text}
          label={config.label}
          type={config.type}
          id={config.id}
          value={config.value}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;
