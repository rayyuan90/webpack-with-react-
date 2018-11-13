import FormContainer from "./js/components/container/FormContainer";
//
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
