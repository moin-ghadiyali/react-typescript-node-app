import React from 'react';

export default class Footer extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = { nameNew: this.props.name }
    }

    handleChange(e:any) {
        this.setState({
           nameNew: 'MERN' 
        });
    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.nameNew}</h1>
                <button onClick={this.handleChange.bind(this)} ></button>
            </div>
        )
    }
}