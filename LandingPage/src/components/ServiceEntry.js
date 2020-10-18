import React, {} from 'react';
import styled from 'styled-components';

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

    section {
        padding: 160px 0;
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

    .serviceName {
        text-align: center!important;
    }

    .section-heading {
        font-size: 40px;
        margin-top: 0;
        margin-bottom: 15px;
        text-transform: uppercase!important;
        font-family: 'Nanum Gothic',sans-serif;
    }

    .section-subheading {
        font-family: 'Nanum Gothic',sans-serif;
        font-style: normal;
        word-break: keep-all;
        line-height: normal;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 75px;
        text-transform: none;
    }

    .text-strong {
        background: #D5EFFC;
        border: 1px solid #D5EFFC;
        border-radius: 4px;
    }

    .col {
        text-align: center;
        padding: 0 2em;
    }

    .col-side {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col-logo {
        display: flex;
        background: #9CD6F0;
        border: 1px #9CD6F0;
        border-radius: 100%;
        height: 120px;
        width: 120px;
        color: white;
        align-items: center;
        justify-content: center;
    }

    .fas {
        font-size: 65px;
    }

    .col-section-heading {
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 15px;
        text-transform: uppercase!important;
        font-family: 'Nanum Gothic',sans-serif;
    }

    .text-muted {
        font-weight: 400;
        font-size: 16px;
        word-break: keep-all;
        line-height: normal;
        font-family: 'Nanum Gothic',sans-serif;
    }

`;

const ServiceEntry = () => {
    return (
        <Div id="page-main">
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="serviceName">
                            <h2 className="section-heading">WHAT IS ENTRYDSM</h2>
                            <h3 className="section-subheading">
                                EntryDSM은 대덕소프트웨어마이스터고등학교 학생들의 자발적 참여로<br></br>개발 및 유지보수가 이뤄지고 있는 <strong className="text-strong">입학전형시스템</strong>입니다.
                            </h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <div className="col-side">
                                <span className="col-logo">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                            </div>
                            <h4 className="col-section-heading">입학전형 일정 안내</h4>
                            <p className="text-muted">입학전형시스템에 로그인 하시면<br></br>학교 홈페이지에 접속할 필요 없이<br></br>다가오는 일정을 손쉽게 확인하실 수 있습니다.</p>
                        </div>
                        <div className="col">
                            <div className="col-side">
                                <span className="col-logo">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            <h4 className="col-section-heading">사용자 친화적 UI</h4>
                            <p className="text-muted">학생들의 의견을 수렴하여 구성된<br></br>사용자 친화적 UI를 제공하므로 원서 제출 및<br></br>전형료 납부를 쉽고 간편하게 진행할 수 있습니다.</p>
                        </div>
                        <div className="col">
                            <div className="col-side">
                                <span className="col-logo">
                                    <i class="fas fa-laptop"></i>
                                </span>
                            </div>
                            <h4 className="col-section-heading">강력한 보안</h4>
                            <p className="text-muted">해외 IP 차단, DDOS 대응 등 보안성 강화에<br></br>총력을 다해 여러분께 안정적으로<br></br>서비스를 제공할 수 있도록 노력하겠습니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Div>
    );  
}

export default ServiceEntry;