const axios = require('axios')

export const getTimelineData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/nyt/states/wisconsin');
        return response.data.splice(60);
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

export const getMobilityData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/apple/countries/usa/wisconsin');
        return response.data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

export const getCountyData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/jhucsse/counties');
        return response.data.filter(obj => obj.province === 'Wisconsin');
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}