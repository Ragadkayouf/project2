import React, { useEffect, useRef, useState } from 'react'
import './Game1.css'


export  function Game1() {
    const myStyle={
        backgroundImage: "url('https://www.matific.com/students/app/6.4.0/TemplateData/opening_screen_foreground.png')",
        height:'90vh',
        marginTop:'-90px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    let [score, setScore] = useState(0)
    let [mistakes, setMistakes] = useState(0)
    let [currentProblem, setCurrentProblem] = useState(generateProblem())
    let [userAnswer, setUserAnswer] = useState("")
    let [showError, setShowError] = useState(false)
    const answerField = useRef(null)
    const resetButton = useRef(null)

    useEffect(() => {
        if (score === 10 || mistakes === 3) {
            setTimeout(() => resetButton.current, 331)
        }
    }, [score, mistakes])

    function generateNumber(max: number) {
        return Math.floor(Math.random() * (max + 1))
    }

    function generateProblem() {
        return {
            numberOne: generateNumber(10),
            numberTwo: generateNumber(5),
            operator: ["+"][generateNumber(0)]
        }
    }



    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()

        // answerField.current

        let correctAnswer
        if (currentProblem.operator === "+")
            correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
      


        if (correctAnswer === parseInt(userAnswer, 10)) {
            setScore((prev: number) => prev + 1)
            setCurrentProblem(generateProblem())
            setUserAnswer("")
        } else {
            setMistakes((prev: number) => prev + 1)
            setShowError(true)
            setTimeout(() => setShowError(false), 401)
        }
    }

    function resetGame() {
        setScore(0)
        setMistakes(0)
        setUserAnswer("")
        setCurrentProblem(generateProblem())
        // answerField.current
    }


    return (
       <div className='backImg'>
        <>
        <div style={myStyle}>
           
        </div>
           
            <div
                className={"main-ui" + (mistakes === 3 || score === 10 ? " blurred" : "")}
            >
                <p className={"problem" + (showError ?  " animate-wrong" : "")}>
                    {currentProblem.numberOne} {currentProblem.operator}{" "}
                    {currentProblem.numberTwo}
                </p>

                <form onSubmit={handleSubmit} action="" className="our-form">
                    <input
                        ref={answerField}
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        type="text"
                        className="our-field"
                        autoComplete="off"
                    />
                     <div className="Submit" >
                    <button>Submit</button>
                    </div>
                </form>

                <p className="status">
                    You need 10 more points, and are allowed to make 3 more mistakes.
                </p>

                <ProgressBar score={score} />
            </div>

            <div
                className={
                    "overlay" + (mistakes === 3 || score === 10 ? " overlay--visible" : "")
                }
            >
                <div className="overlay-inner">
                    <p className="end-message">
                        {score === 10 ? "Congrats! You won." : "Sorry! You lost."}
                       
                    </p>
                    <button
                        ref={resetButton}
                        onClick={resetGame}
                        className="reset-button"
                    >
                        Start Over
                    </button>
                </div>
            </div>
       </></div> 
    )
}

function ProgressBar(props: { score: number }) {
    return (
        <div className="progress">
            <div className="boxes">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div
                className="progress-inner"
                style={{ transform: `scaleX(${props.score / 10})` }}
            ></div>
        </div>
    )
}

