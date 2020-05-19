import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label, linearGradient
} from 'recharts';
const {getMobilityData} = require('./getData');

const formatData = (data) => ((data.data.splice(75)).map((entry) => ({date: entry.date.split('-').slice(1).join('-'), driving:+(entry.driving.toFixed(2))})));

class Historical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    async componentDidMount() {
        const data = await getMobilityData();
        this.setState({data: formatData(data)});
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        margin={{ top: 10, left: 0, right: 15, bottom: 0 }}
                        data={this.state.data}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5928bd" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#5928bd" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#525151"/>
                        <XAxis tick={{fontSize: 10}} dataKey="date" interval={7} />
                        <YAxis tick={{fontSize: 10}}>
                            <Label angle={-90} value='% +/- of driving traffic from Jan. 13' fontSize={12} fill="#82807f" style={{textAnchor: 'middle'}} />
                        </YAxis>
                        <Tooltip labelStyle={{color: '#212120'}} labelFormatter={(name) => name}/>
                        <Legend />
                        <Area type="monotone" dataKey="driving" stroke="#5928bd" fillOpacity={1} fill="url(#colorUv)"/>
                        <ReferenceLine x="05-14" stroke="white" label={{value: 'reopening', position: 'outsideleft', fontSize: 10, fill: 'white'}}/>
                    </AreaChart>
            </ResponsiveContainer>
        );
    }
}

export default Historical;