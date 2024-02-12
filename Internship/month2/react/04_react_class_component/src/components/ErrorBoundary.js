import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state ={hasError:false}
    }
    componentDidCatch(error){

    }
    render(){
        if (this.state.hasError){
            return <p>something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;