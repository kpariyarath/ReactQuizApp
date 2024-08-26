import Question from './Question'
import {useReducer} from "react";

const initialState ={
    currentQuestionIndex : 0,
    questions : []
} 

const reducer = (state, action) =>{
    if(action.type === "NEXT_QUESTION"){
        return {...state,currentQuestionIndex : state.currentQuestionIndex + 1}
    }
    return state;
}

const Quiz = () => {

    const [state, dispacth] = useReducer(reducer,initialState);

    console.log("render", state);

    const textClick =() =>{
        console.log("testClick");
        dispacth({type: "NEXT_QUESTION"})
    }

    return (
        <div className='quiz'>
            <div>
                <div className='score'> Question {state.currentQuestionIndex}/8</div>
                <Question questions = { state.questions}/>
                <div className='next-button' onClick={textClick}>
                    Next Question 
                </div>
            </div>
        </div>
    )
}

export default Quiz;