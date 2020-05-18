import React from 'react';
import Historical from './Historical';
import Mobility from './Mobility';

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
                    <h1>Wisconsin decided to open up early...</h1>
                    <p>Here's how it's going</p>
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
                <div className="item4">Bottom right</div>
            </div>
        );
    }
}

export default Container;