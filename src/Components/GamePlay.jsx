import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button } from './Button'
import { OutlineButton } from './Button'
import Rules from './Rules'


function GamePay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        };

        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }

    const reesetScore = () => {
        setScore(0);
    }
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                    error={error}
                    setError={setError} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className='btns'>
                <OutlineButton
                    onClick={reesetScore}
                >Reset</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide " : "Show "}Rules</Button>
            </div>

            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePay

const MainContainer = styled.main`
/* padding-top: 10px; */
margin: 0 40px;
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.btns{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
`;


