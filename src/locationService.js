// locationService.js

/**
 * 현재 위치를 가져오는 함수 (테스트용 Mock)
 * 실제 GPS 대신 임의 좌표 반환
 */
function getCurrentLocationMock() {
    console.log("[Location] Mock 위치 반환");

    return {
        latitude: 37.5665,   // 서울 시청 좌표
        longitude: 126.9780
    };
}

/**
 * 실제 위치를 가져오는 함수 (브라우저 GPS 사용)
 */
function getCurrentLocationReal() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocation을 지원하지 않는 브라우저입니다.");
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("[Location] 실제 위치 가져오기 성공");

                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                reject("[Location] 위치 가져오기 실패: " + error.message);
            }
        );
    });
}

/**
 * 현재 위치 가져오기 (Mock / Real 선택)
 */
async function getCurrentLocation(useMock = true) {
    if (useMock) {
        return getCurrentLocationMock();
    } else {
        return await getCurrentLocationReal();
    }
}

module.exports = {
    getCurrentLocation
};