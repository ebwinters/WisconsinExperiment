import React from 'react';
import {
    PieChart, ResponsiveContainer, Pie, Tooltip, Cell
} from 'recharts';
const {getCountyData} = require('./getData');

const colors = ['#359c02', '#c40205', '#5928bd', '#ccae29'];
const formatData = (data) => ((data).map((entry, index) => ({
    county: entry.county,
    cases: entry.stats.confirmed,
    deaths: entry.stats.deaths,
    color: colors[index % colors.length]
})));

class Counties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selector: 'cases'
        };
    }

    async componentDidMount() {
        const data = await getCountyData();
        this.setState({data: formatData(data)});
    }

    renderForm = () => {
        return (
            <label>
            Show me
                <select value={this.state.selector} onChange={(event) => this.setState({selector: event.target.value})}>
                    <option value="cases">Cases</option>
                    <option value="deaths">Deaths</option>
                </select> by county
            </label>
        );
        
    }

    render() {
        return (
            <div>
                {this.renderForm()}
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart
                        margin={{ top: 10, left: 0, right: 15, bottom: 0 }} width="100%" height="100%" align="center"
                    >
                        <Tooltip labelStyle={{color: '#212120'}} labelFormatter={(name) => name}/>
                        <Pie data={this.state.data} dataKey={this.state.selector} nameKey="county" outerRadius={80} fill="#8884d8">
                        {
                            this.state.data?.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
                        }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default Counties;