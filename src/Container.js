import React from 'react';
import Historical from './Historical';

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
                    <Historical />
                </div>
                <div className="item2">Top right</div>  
                <div className="item3">Bottom left</div>
                <div className="item4">Bottom right</div>
            </div>
        );
    }
}

export default Container;