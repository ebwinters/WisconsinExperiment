import React from 'react';
import Historical from './Historical';
import Mobility from './Mobility';
import Counties from './Counties';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    async componentDidMount() {
        
    }

    render() {
        return (
            <div id="container">
                <div className="header">
                    <h1>Illinois COVID-19 Dashboard</h1>
                </div>
                <div className="item1">
                    <Historical cases/>
                </div>
                <div className="item2">
                    <Historical deaths/>
                </div>  
                <div className="item3">
                    <Mobility />
                </div>
                <div className="item4">
                    <Counties />
                </div>
                <div className="footer">
                    <p>Source: <a style={{color: 'white', textDecoration: 'underline'}} target="blank" href="https://github.com/NovelCOVID/API">NOVELCovid API</a></p>
                </div>
            </div>
        );
    }
}

export default Container;