import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ address }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const { kakao } = window;

        if (kakao && kakao.maps) {
            const mapOption = {
                center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표 (서울)
                level: 10, // 지도 확대 레벨
            };
            const map = new kakao.maps.Map(mapContainer.current, mapOption);

            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(address, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    map.setCenter(coords);

                    new kakao.maps.Marker({
                        map: map,
                        position: coords,
                    });
                } else {
                    console.error(`Failed to find the location for ${address}`);
                }
            });
        }
    }, [address]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default KakaoMap;