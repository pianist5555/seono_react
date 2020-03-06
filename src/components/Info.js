import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('렌더링 완료되었습니다!')
        console.log({
            name,
            nickname
        });
    });
    const onChangeName = e =>{
        setName(e.target.value);
    };
    const onChangeNickName = e =>{
        setNickName(e.target.value);
    };
    
    return("hi");
};

export default Info;