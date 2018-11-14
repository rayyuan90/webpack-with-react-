import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer";
// import config from './config.json';
// const config = require('./config.json');
//
const wrapper = document.getElementById("create-article-form");
// console.log(config);
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
