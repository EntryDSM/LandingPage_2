import React from 'react'
import style from 'styled-components'
import { KJW, KJH, LWC, LYS, SWJ, Male, Female, JWY } from '../img/Member'

const Team = style.div `
    font-size: 65px;
    font-weight: bold;
    font-family: 'NanumGothic', sans-serif;
    line-height: 75px;
    letter-spacing: 10px;
    text-align: center;
    margin-top: 105px;
`;
const Explain = style.div `
    font-size: 20px;
    font-family: 'NanumGothic', sans-serif;
    line-height: 35px;
    text-align: center;
    margin-top: 20px;
`;
const Allprofiles = style.div `
    max-width: 1070px;
    min-height: 1120px;
    margin: 0 auto;
    margin-top: 200px;
`;
const Img = style.div `
    width: 209px;
    height: 209px;
    border-radius: 105px;
    & > img {
        border-radius: 50%;
        margin: 8px
    }
    & > img:hover {
        opacity: 0.7;
    }
`;
const Third = style(Img) `
    border: 1px solid #FFEE00;
`;
const Second = style(Img) `
    border: 1px solid #707070;
`;
const First = style(Img) `
    border: 1px solid #0015D5;
`;
const Line = style.div `
    max-width: 1068px;
    height: 250px;
    display: flex;
    margin-bottom: 41px;
`;
const Name = style.div `
    font-size: 25px;
    font-weight: bold;
    font-family: 'NanumGothic', sans-serif;
    margin-left: 68px;
    margin-top: 7px;
`;
const Profile = style.div `
    margin-right: 3.6vw;
`;
const FB = style.div `
    font-family: 'NanumGothic', sans-serif;
    font-size: 18px;
    font-weight: bold;
`
const Github = style.button `
    font-size: 16px;
    font-family: 'NanumGothic', sans-serif;
`
const Hover = style.div `

`
const MemberProfile = () => {
    return(
        <div>
            <Team>TEAM ENTRY</Team>
            <Explain>
                EntryDSM의 발전과 새로운 이야기를 만드는 사람들 입니다.
            </Explain>
            <Allprofiles>
                <Line>
                    <Profile>
                        <Third>
                            <img src={ KJW }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                                <Hover>        
                                    <FB>FRONT - END</FB>
                                </Hover>
                        </Third>
                        <Name>김준우</Name>
                    </Profile>
                    <Profile>
                        <Third>
                            <img src={ Female }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                            
                        </Third>
                        <Name>장소희</Name>
                    </Profile>
                    <Profile>
                        <Second>
                            <img src={ LWC }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                        </Second>
                        <Name>이우찬</Name>
                    </Profile>
                    <div>
                        <Second>
                            <img src={ Male }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                        </Second>
                        <Name>오준상</Name>
                    </div>
                </Line>
                <Line>
                    <Profile>
                        <Third>
                            <img src={ KJH }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='데브옵스, 백엔드 엔지니어' />
                        </Third>
                        <Name>김재훈</Name>
                    </Profile>
                    <Profile>
                        <Third>
                            <img src={ Male }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='백엔드 엔지니어' />
                        </Third>
                        <Name>황신우</Name>
                    </Profile>
                    <Profile>
                        <Third>
                            <img src={ SWJ }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='백엔드 엔지니어' />
                        </Third>
                        <Name>신은주</Name>
                    </Profile>
                    <div>
                        <Second>
                            <img src={ Male }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='백엔드 엔지니어' />
                        </Second>
                        <Name>김대웅</Name>
                    </div>
                </Line>
                <Line>
                    <Profile>
                        <Second>
                            <img src={ LYS }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='백엔드 엔지니어' />
                        </Second>
                        <Name>임용성</Name>
                    </Profile>
                    <Profile>
                        <Third>
                            <img src={ Male }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='UX/UI 디자이너' />
                        </Third>
                        <Name>김해건</Name>
                    </Profile>
                    <Profile>
                        <Second>
                            <img src={ JWY }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='PM, 백엔드 엔지니어' />
                        </Second>
                        <Name>정우영</Name>
                    </Profile>
                    <div>
                        <First>
                            <img src={ Female }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='디자이너' />
                        </First>
                        <Name>임서영</Name>
                    </div>
                </Line>
                <Line>
                    <Profile>
                        <First>
                            <img src={ Male }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                        </First>
                        <Name>전규현</Name>
                    </Profile>
                    <div>
                        <First>
                            <img src={ Female }
                                width='194'
                                height='194'
                                border-radius='100'
                                alt='프론트엔드 엔지니어' />
                        </First>
                        <Name>김혜준</Name>
                    </div>
                </Line>
            </Allprofiles>
        </div>
    )
}

export default MemberProfile;