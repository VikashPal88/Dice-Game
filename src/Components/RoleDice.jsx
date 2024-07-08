import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice({ roleDice, currentDice }) {
    return (
        <DiceContainer>
            <div className='dice' onClick={roleDice}>
                <img src={`public/images/dice_${currentDice}.png`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}
export default RoleDice



const DiceContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`;
