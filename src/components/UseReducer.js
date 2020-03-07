import React, {useState, useReducer} from "react";
// useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 것
function reducer(state, action){
    switch (action.type){
        case 'INCREMENT' :
            return { value: state.value +1 };
        case 'DECREMENT' :
            return { value: state.value -1 };  
        default:
            return state;  
    }
}

const ReducerGo = () => {       //useReducer의 첫 파라미터는 리듀서 함수, 다음은 기본 값
    const [state, dispatch] = useReducer(reducer, {value:0});
    
    return (
        <div>
            <p>
                카운터의 값 = {state.value}
            </p>                  {/*dispatch는 액션을 발생시키는 함수*/}
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    )
}

export default ReducerGo;