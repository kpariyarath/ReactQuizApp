const Answer = ({
    answerText, 
    onSelectAnswer, 
    index,
    currentAnswer,
    correctAnswer
}) => {
    const letterMapping = ['A','B','C','D'];

    const isCorrectAnswer = currentAnswer && answerText === correctAnswer ;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer!== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? " correct-answer":"";
    const wrongAnswerClass = isWrongAnswer ?" wrong-answer":"";
    const disabledClass = currentAnswer?" disabled-answer":"";

    let answerClassName = 'answer';
    if(correctAnswerClass!== "")
        answerClassName = answerClassName + correctAnswerClass;

    if(wrongAnswerClass!== "")
        answerClassName = answerClassName + wrongAnswerClass;

    if(disabledClass!== "")
        answerClassName = answerClassName + disabledClass;

    return (
        <div 
            className={answerClassName} 
            onClick={()=> onSelectAnswer(answerText)}
        >
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{answerText}</div> 
        </div>
        );
};

export default Answer;