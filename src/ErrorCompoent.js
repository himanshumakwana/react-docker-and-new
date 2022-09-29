import { Component } from "react";

export class ErrorComponent extends Component {
  constructor(props) {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.state.hasError = true
    console.log("error", error)
    // logErrorToMyService(error, errorInfo);
  }
  
  static getDerivedStateFromError(error) {  
    // It will update the state so the next render shows the fallback UI.  
    return { hasError: true };  
  }  

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
