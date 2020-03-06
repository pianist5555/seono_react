import React, {useState, useEffect} from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect(()=>{
    //     console.log('렌더링 완료되었습니다! 2번째 인자를 빈 배열로 주었기때문에 최초 마운트될 떄만 실행됩니다.')
    //     console.log({ 
    //         name,
    //         nickname
    //     });
    // },[]);

    // 렌더링되면 실행됨 didMount, update(effect에 2번째 인자를 주고 변경이되면)와 비슷하네요
    useEffect(()=>{
        //name이 바뀔때만 useEffect를 실행시키게 함 -> 2번째 인자가 name을 가르키고 있기에
        console.log("새로운내용이 변경되었다 name의")
        console.log({
            name,
            nickname
        });
    },[name]);
    const onChangeName = e =>{
        setName(e.target.value);
    };
    const onChangeNickName = e =>{
        setNickname(e.target.value);
    };
    
    return(
    <div>
        <input name={name} onChange={onChangeName}></input>
        <input name={nickname} onChange={onChangeNickName}></input>
    </div>)
    ;
};

export default Info;