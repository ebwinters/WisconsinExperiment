const Redis = require("ioredis");
const {getCountyData, getMobilityData, getTimelineData} = require('./getData');
const redis = new Redis({
    port: 6379,
    host: "127.0.0.1",
    password: ""
});

const storeData = async () => {
    console.log('Scraping beginning');
    const _resolveData = async (obj) => {
        const { key, fn } = obj;
        const data = await fn();
        redis.set(key, JSON.stringify(data));
    };
    await Promise.all([
        { key: 'wisco-experiment:county', fn: getCountyData },
        { key: 'wisco-experiment:mobility', fn: getMobilityData },
        { key: 'wisco-experiment:timeline', fn: getTimelineData }
    ].map(_resolveData));
    console.log('Scraping complete!');
};

storeData();
setInterval(storeData, 864e5);



