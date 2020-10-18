import React, {  } from 'react';
import styled from 'styled-components';
import { background, EntryLogo } from '../img'

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

    a {
        text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    > .masthead {
        background-image: url(${background});
        height: 750px;
        text-align: center;
        color: #fff;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: 70%;
        background-size: cover;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .intro-text {
        padding-top: 300px;
        padding-bottom: 200px;
        text-align: center;
    }

    .intro-lead-in {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    
    .intro-schoolName {
        font-size: 45px;
        font-weight: bold; 
        font-family: 'Nanum Gothic', sans-serif;
    }
    
    .intro-heading-in {
        font-size: 70px;
        line-height: 70px;
        margin-bottom: 70px;
        width: 1089px;
        height: 80px;
        margin: 0 auto;
        margin-bottom: 70px;
    }
    
    .intro-circleName {
        display: flex;
        font-size: 60px;
        font-weight: bold; 
        font-family: 'Nanum Gothic', sans-serif;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .btn {
        font-size: 20px;
        font-weight: bold;
        font-family: 'Nanum Gothic',sans-serif;
        color: white;
        border: none;
        background: #79C2E3;
        padding: 1.2rem 1.5rem;
        text-align: center;
        line-height: 1.5;
        border-radius: 0.3rem;
    }

    .btn:hover {
        background: #5FB4DA;
        transition: .3s;
    }
`;
// #3DFFEB (메인 컬러)
const MainBtn = () => {
    return (
        <Div id="page-main">
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">
                            <span className="intro-schoolName">대덕소프트웨어마이스터고등학교</span>
                        </div>
                        <div className="intro-heading-in">
                            <span className="intro-circleName">입학전형 시스템<img src={ EntryLogo } alt='logo'></img>입니다</span>
                        </div>
                        <a className="btn" role="button" href="https://apply.entrydsm.hs.kr/">원서 접수하기</a>
                    </div>
                </div>
            </header>
        </Div>
    );
}

export default MainBtn;