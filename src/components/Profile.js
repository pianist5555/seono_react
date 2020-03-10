import React from 'react';

const data = {
    velopert: {
        name: "seono",
        description: "I'll become fullstack-developer"
    },
    gildong : {
        name: "Hong",
        description:"example"
    }
};

// 컴포넌트에서 넘겨주는 match객체를 받아옴, {}로 받아오게되면 단순 파라미터가 아님
const Profile = ({match}) => {
    // URL/:param이 넘어오면 match.params로 대입
    /* const {파라미터 값} 을 이용해서 받아 올 수 있다. 변수명 {파라미터 값}과 match.params의 객체 파라미터와 비교한다고 추측할 수 있다.
        일치 하지 않으면 값이 넣어지지 않음
        변수명에 {}가 붙은걸 보니 컴포넌트에서 넘겨주는 변수명이라고 추측할 수 있다.*/
    const {username2} = match.params;
    //변수 profile에 data의 username2(파라미터로 받아온 객체)를 넣어서 해당되는 파라미터 객체를 받아옴
    const profile = data[username2];
    console.log(profile)

    if(!profile){
        return <div>Unknown</div>;
    }
    return (
        <div>
            <h3>
                {username2}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;