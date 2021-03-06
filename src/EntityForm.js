import React from "react";

let EntityItem = (props) => {
    return (
        <div>
            <span>
                Type: {props.entityType}
                Value: {props.entityValue}
            </span>
            <button onClick={props.deleteAction}>remove</button>
        </div>
    )
}

class EntityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            selectedType: "",
            entities: []
        }
    }

    addEntityItem() { 
        let newState = {...this.state};
        newState.entities.push({type: this.state.selectedType, value: this.state.selectedValue});
        newState.selectedValue = "";
        newState.selectedType = "";
        this.setState(newState);
    }

    deleteItem(idx){
        let newState = {...this.state};
        newState.entities.splice(idx, 1);
        this.setState(newState); 
    }

    setEntityType(event) {
        this.setState({selectedType: event.target.value});
    }

    setEntityValue(event) {
        this.setState({selectedValue: event.target.value});
    }

    render() {
        let enteredItems = this.state.entities.map((item, idx) => {
            return <EntityItem key={idx} entityValue={item.value} entityType={item.type} deleteAction={(event) => {
                event.preventDefault();
                this.deleteItem(idx);
            }}></EntityItem>;
        })
        return (

            <div>
                <h1>EntityForm</h1>
                <form>
                    <select type="select" value={this.state.selectedType} onChange={(event) => {
                        this.setEntityType(event)
                    }}>
                        <option value=""> -- </option>
                        <option value="location">Location</option>
                        <option value="person">Person</option>

                    </select>
                    <input type="text" value={this.state.selectedValue} onChange={(event) => {
                        this.setEntityValue(event)
                    }}></input>
                    <button onClick={(event) => {
                        event.preventDefault();
                        this.addEntityItem();
                    }}>add</button>
                </form>
                <button onClick={(event) => {
                    event.preventDefault();
                    this.props.classify(this.state.entities)}
                    }>Classify!</button>
                <hr></hr>
                {enteredItems}
            </div>
        )
    }
}

export default EntityForm; 