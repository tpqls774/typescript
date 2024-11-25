import { useState } from 'react'
import eati from '../../asset/eatcns.svg'
import * as S from '../main/Main.style'

const Main = () => {
    const [score, setScore] = useState(0)

    const getScore = () => {
        setScore(score + 1)
    }

    return (
        <>
            <S.Wrap>
                <S.Eati src={eati} alt="character" onClick={getScore} />
                <h1>저를 클릭하세요!</h1>
                <h2>점수: {score}</h2>
            </S.Wrap>
        </>
    )
}

export default Main
