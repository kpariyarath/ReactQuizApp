import { QuizContext } from '../contexts/quiz';
import Question from './Question'
import {useContext} from "react";


const Quiz = () => {

    const [quizState, dispacth] = useContext(QuizContext);

    const textClick =() =>{
        dispacth({type: "NEXT_QUESTION"})
    }

    return (
        <div className='quiz'>
            { quizState.showResults && quizState.questions.length > 0 (
                <div classname ='results'>
                    <div className='congratulations'>Congratulations</div>
                    <div className='results-info'>
                        <div>You have completed the quiz.</div>
                        <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    <div className='next-button' onClick={() => dispacth({type: "RESTART"})} >start</div>
                </div>
            )}
            { !quizState.showResults &&(
                <div>
                    <div className='score'> 
                        Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                    </div>
                    <Question questions = { quizState.questions}/>
                    <div className='next-button' onClick={textClick}>
                        Next Question 
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz;