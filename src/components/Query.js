import React from 'react';
import qs from 'qs';

const Query = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨 앞의 ? 를 생략
    });
    // 문자열로 넘어오기에 숫자로 받고 싶을 경우 parseInt() 사용해야함
    const showDetail = query.detail === 'true'; 
    return (
        <div>
            <h1>소개</h1>
            <p>I wanna query</p>
            {showDetail && <p>detail 값을 true로 설정하였습니다.</p>}
        </div>
    );
};

export default Query;