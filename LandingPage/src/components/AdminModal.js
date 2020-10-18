import React, { } from 'react';
import styled, {keyframes} from 'styled-components';
import { entryAdmin } from '../img';

const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}`;

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

    a {
        text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow: scroll;
        outline: 0;
        animation: ${FadeIn} .8s;
    }

    .fade {
        transition: opacity .15s linear;
    }

    .portfolio-modal .modal-dialog {
        margin: 1rem;
        max-width: 100vw;
    }

    .modal.fade .modal-dialog {
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    }

    .modal-dialog {
        position: relative;
        width: auto;
        margin: .5rem;
        pointer-events: none;
    }

    .portfolio-modal .modal-content {
        padding: 100px 0;
        text-align: center;
    }

    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid lightgray;
        border-radius: .3rem;
        outline: 0;
    }

    .modal-body {
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
    }

    .portfolio-modal .modal-content {
        padding: 100px 0;
        text-align: center;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .mx-auto {
        margin-left: auto!important;
        margin-right: auto!important;
    }

    .portfolio-modal .modal-content h2 {
        font-size: 3em;
        margin-bottom: 15px;
    }

    .text-uppercase {
        text-transform: uppercase!important;
    }

    .portfolio-modal .modal-content p {
        margin-bottom: 30px;
    }

    p {
        line-height: 1.75;
        margin-top: 1em;
    }
    
    .modal-text {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 18px;
    }

    .img-fluid {
        width: 60%;
        max-width: 100%;
        height: auto;
    }

    .list-unstyled {
        padding-left: 0;
        list-style: none;
    }

    h5 {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 18px;
    }

    li {
        font-family: 'Nanum Gothic',sans-serif;
    }

    .modalBtn {
        font-family: 'Nanum Gothic',sans-serif;
        cursor: pointer;
        color: #fff;
        background-color: #3DFFEB;
        border: none;
        margin-top: 2em;
        padding: 1em 2.4em;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
        outline: none;
        transition: .5s;
    }

    .modalBtn:hover {
        background-color: #3AEAD8;
        transition: .3s;
    }

`;
// #3DFFEB (메인 컬러)
const AdminModal = ({ setClickedNumber }) => {
    const onClick = (e) => {
        console.log(11);
        setClickedNumber(Number(e.currentTarget.dataset.id))
    }

    return (
        <Div>
            <div className="modal fade portfolio-modal" id="portfolioModal1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="mx-auto">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase">입학전형시스템</h2>
                                            <p>전형 관리자 페이지 개발</p>
                                            <img className="img-fluid" src={entryAdmin} alt='entry'/>
                                            <p className="modal-text">지원자들의 원서 제출 현황을 관리하고, 쾌적한 시스템 운영을 제공하는 관리자 대시보드입니다.</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5>입학전형시스템 메인플랫폼개발팀</h5>
                                                    <br></br>
                                                </li>
                                                <li>웹 프론트엔드 개발: 장소희</li>
                                                <li>백엔드 개발: 신은주 정우영</li>
                                            </ul>
                                            <button className="modalBtn" data-id="" onClick={onClick}>
                                                프로젝트 닫기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default AdminModal;