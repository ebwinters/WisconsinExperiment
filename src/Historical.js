import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const {getHistoricalData} = require('./getData');

const formatData = (data) => (
    //key data, value num
    Object.entries(data).map(([key, value]) => ({date: key, cases: value}))
);

class Historical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    async componentDidMount() {
        const data = await getHistoricalData();
        const formattedData = formatData(data[4].timeline.cases);
        this.setState({data: formattedData});
        console.log("DATA", formattedData);
    }

    render() {
        return (
            <LineChart
                width={1000}
                height={700}
                data={this.state.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="" />
                <XAxis tick={{fontSize: 10}} dataKey="date" interval={3} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

export default Historical;