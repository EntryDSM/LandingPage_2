import React from 'react'
import style from 'styled-components'
import { Entry, DSM } from '../img/Footer'

const Background = style.div `
    background-color: #F3F8FC;
    width: 100%;
    height: 100px;
    display: flex;
`
const EntryImg = style.div `
    margin-left: 8vw;
    margin-top: 30px;
`
const DSMImg = style.div `
    margin-left: 28vw;
    margin-top: 15px
`
const DSMaddress = style.div `
    font-size: 15px;
    font-family: 'NanumGothic', sans-serif;
    margin-left: 1.5vw;
    margin-top: 30px;
`

const Footer = () => {
    return (
        <div>
            <Background>
                <EntryImg>
                    <img src={ Entry }
                        width='153' 
                        alt='EntryLogo'/>
                </EntryImg>
                <DSMImg>
                    <img src={ DSM }
                        width='129.58'
                        alt='DsmLogo'/>
                </DSMImg>
                <DSMaddress>
                    교무실 ☎: 042-866-8822 교무실 행정실 ☎: 042-866-8885 <br />
                    대덕소프트웨어마이스터고등학교(34111) 대전광역시 유성구 가정북로 76(장동 23-9)
                </DSMaddress>
            </Background>
        </div>
    );
}

export default Footer;