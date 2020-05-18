const axios = require('axios')

const getTimelineData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/nyt/states/wisconsin');
        return response.data.splice(45);
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

const getStateData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v2/states/wisconsin');
        return response.data;
    } catch (err) {
        console.log('Error: Requesting historical data failed!', err);
        return;
    }
}

module.exports = {
    getTimelineData,
    getStateData
};