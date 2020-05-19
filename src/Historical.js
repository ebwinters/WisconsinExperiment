import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
const {getTimelineData} = require('./getData');

const formatData = (data) => ((data).map((entry) => ({date: entry.date.split('-').slice(1).join('-'), cases: entry.cases, deaths: entry.deaths})));

class Mobility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    async componentDidMount() {
        const data = await getTimelineData();
        this.setState({data: formatData(data)});
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        margin={{ top: 10, left: 0, right: 15, bottom: 0 }}
                        data={this.state.data}
                    >
                        <CartesianGrid stroke="#525151"/>
                        <XAxis tick={{fontSize: 10}} dataKey="date" interval={7} />
                        <YAxis tick={{fontSize: 10}} />
                        <Tooltip labelStyle={{color: '#212120'}} labelFormatter={(name) => name}/>
                        <Legend />
                        <Line type="monotone" dataKey={this.props.cases ? "cases" : "deaths"} stroke={this.props.cases ? "#359c02" : "#c40205"} dot={false} />
                        <ReferenceLine x="05-14" stroke="white" label={{value: 'reopening', position: 'left', fontSize: 10, fill: 'white'}}/>
                    </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default Mobility;