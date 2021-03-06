import styled, {keyframes} from 'styled-components';
import React, { useState } from 'react';
import { entryAdmin, entryMain, entryQna } from '../img'

const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}`;

const Div = styled.div`
    a {
        text-decoration: none;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    #portfolio * {
        z-index: 2;
    }

    section {
        padding: 160px 0;
    }

    .bg {
        background: #F7F9FA;
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
        justify-content: center;
        align-items: center;
    }

    .col {
        text-align: center!important;
    }

    h2.section-heading {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 45px;
        margin-top: 0;
        margin-bottom: 15px;
    }   

    h3.section-subheading {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 75px;
        text-transform: none;
        font-style: normal;
        word-break: keep-all;
    }

    .text-muted {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 15px;
        margin-top: 10px;
    }

    .portfolio-item {
        padding: 0 1em;
    }
    
    .portfolio-link {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        
    }

    .link-plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        transition: 1s;
        top: 90px;
    }

    .img-plus {
        display: flex;
        width: 45px;
        animation: ${FadeIn} 1s;
    }
    
    .fas {
        display: none;
        font-size: 40px;
        color: #79C2E3;
    }


    #portfolio .portfolio-item .portfolio-link {
        position: relative;
        display: block;
        max-width: 400px;
        margin: 0 auto;
        cursor: pointer;
    }

    h4 {
        font-family: 'Nanum Gothic',sans-serif;
        font-size: 22px;
    }

    .img-fluid {
        width: 100%;
        
        // transition: 0.5s;   
        
    }

    .img-fluid:hover {
        opacity: 0.4;
        transition: 0.3s;
    }

    .portfolio-caption {
        max-width: 100%;
        height: auto;
        text-align: center;
        background: white;
        padding: 1.5em 1.5em;
    }

`;
// background: #F7F9FA;
// #3DFFEB (메인 컬러)

const Portfolio = ({ setClickedNumber }) => {
    const [hoverNumber, setHoverNumber] = useState(0)


    const onMouseOver = (e)  => {
        // console.log(e.target)
        setHoverNumber(Number(e.currentTarget.dataset.id))
        // parseInt()
    }
    const onMouseLeave = () => {
        setHoverNumber(0)
    }

    const onClick = (e) => {
        console.log(11)
        setClickedNumber(Number(e.currentTarget.dataset.id))
    }
    return (
        <Div id="page-portfolio" hoverNumber={hoverNumber}>
            <section id="portfolio" className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-heading">PORTFOLIO</h2>
                            <h3 className="section-subheading text-muted">
                            EntryDSM은 입학전형시스템을 비롯한 여러 시스템의 개발 • 유지보수를 진행하고 있습니다.
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-item">
                            <div className="portfolio-link" data-id="1" onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                {hoverNumber === 1 && <div className="link-plus">
                                    {/* <i className="fas fa-plus"></i> */}
                                    <img className="img-plus" src={require('../img/plus.svg')} alt='plus' />
                                </div>
                                } 
                                <img className="img-fluid" src={entryMain} alt='fluid'></img>
                            </div>
                            <div className="portfolio-caption">
                                <h4>입학전형시스템</h4>
                                <p className="text-muted">
                                학생용 원서제출 페이지 개발
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-link" data-id="2" onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                {hoverNumber === 2 && <div className="link-plus">
                                    {/* <i className="fas fa-plus"></i> */}
                                    <img className="img-plus" src={require('../img/plus.svg')} alt='entry'/>
                                </div>
                                }
                                <img className="img-fluid" src={entryAdmin} alt='entry'></img>
                            </div>
                            <div className="portfolio-caption">
                                <h4>입학전형시스템</h4>
                                <p className="text-muted">
                                전형 관리자 페이지 개발
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-link" data-id="3"onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                                {hoverNumber === 3 && <div className="link-plus">
                                    {/* <i className="fas fa-plus"></i> */}
                                    <img className="img-plus" src={require('../img/plus.svg')} alt='entry'/>
                                </div>
                                }
                                <img className="img-fluid" src={entryQna} alt='entry'></img>
                            </div>
                            <div className="portfolio-caption">
                                <h4>실시간 메신저</h4>
                                <p className="text-muted">
                                학생-관리자 간 실시간 메신저 개발
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </Div>
    );
}

export default Portfolio;