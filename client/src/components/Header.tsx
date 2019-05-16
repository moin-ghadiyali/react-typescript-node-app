import React from 'react';
import Footer from './Footer';
import '../styles/Header.css'

export default class Header extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = {
            user: 'Mohammed Moin Ghadiyali',
            age: 19
        }
    }

    render() {
        return(
            <div>
                <h1 className="header">Hello Frieds</h1>
                <h1 className="header">{this.state.user}</h1>
                <h1>{this.state.age}</h1>
                <Footer name="Moin" />
            </div>
        )
    }
}