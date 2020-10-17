import React from 'react'
import style from 'styled-components'

const Question = style.div `
    position: relative;
    width: 1050px;
    heigth: 90px;
    font-size: 25px;
    font-family: 'NanumGothic', sans-serif;
    display: flex;
    border: 1px solid #707070;
    padding-left: 60px;
    margin: 0 auto;
    margin-top: 70px;
`;
const More = style.p `
    font-size: 25px;
    position: absolute;
    right: 60px;
    bottom: 2px;
`;
const QnA = style.div `
    font-size: 65px;
    font-weight: bold;
    font-family: 'NanumGothic', sans-serif;
    line-height: 75px;
    letter-spacing: 10px;
    text-align: center;
    margin-top: 210px;
    margin-bottom: 130px;
`;
const EntryQnA = () => {
    return (
        <div>
            <QnA>
                MEMBER Q&A
            </QnA>
            <Question>
                <p style={{marginTop: '20'}}>
                    Q1. 엔트리 개발을 하게 된 계기는 무엇인가요?
                </p>
                <More>▼</More>
            </Question>
            <Question>
                <p style={{marginTop: '20'}}>
                    Q2. 내가 만들었지만 이건 진짜 크~~ 감탄사 나오는 기능이 있나요?
                </p>
                <More>▼</More>
            </Question>
            <Question>
                <p style={{marginTop: '20'}}>
                    Q3. 분야를 백엔드/프론트엔드로 결정하게 된 계기가 있나요?
                </p>
                <More>▼</More>
            </Question>
            <Question>
                <p style={{marginTop: '20'}}>
                    Q4. 개발을 하면서 힘든점이 있다면?
                </p>
                <More>▼</More>
            </Question>
        </div>
    );
}

export default EntryQnA;