import React from "react";
import Header from "./Header";
import EntityForm from "./EntityForm";
import Result from "./Results";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            classification: []
        }
    }
    classify(entities) {
        console.log(entities);
        this.setState({
            classification: ["sport", "Politik"]
        })
    }

    render () {
    return (
        <div>
            <Header></Header>
            <EntityForm classify={(items) => {this.classify(items)}}></EntityForm>
            <Result classification={this.state.classification}></Result>
        </div>
    )
    }
} 

export default App;