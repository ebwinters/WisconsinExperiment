const axios = require('axios')

const getHistoricalData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/historical/usacounties/wisconsin');
        return response.data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

const getStatelData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/states/wisconsin');
        return response.data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

module.exports = {
    getHistoricalData,
    getStatelData
};