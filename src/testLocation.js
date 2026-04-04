// testLocation.js

const { getCurrentLocation } = require('./locationService');

async function test() {
    try {
        const location = await getCurrentLocation(true); // true → Mock 사용
        console.log("현재 위치:", location);
    } catch (error) {
        console.error(error);
    }
}

test();