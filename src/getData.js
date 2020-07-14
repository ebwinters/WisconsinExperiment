const axios = require('axios')

export const getTimelineData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/nyt/states/illinois');
        const data = response.data.splice(60);
        let newCases;
        for (let i = 0; i < data.length; i++) {
            if (i === 0) newCases = 0;
            else newCases = data[i].cases - data[i-1].cases;
            data[i] = { newCases, ...data[i] };
        }
        console.log(data);
        return data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

export const getMobilityData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/apple/countries/usa/illinois');
        return response.data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

export const getCountyData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/jhucsse/counties');
        return response.data.filter(obj => obj.province === 'Illinois');
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}