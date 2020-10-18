import React from 'react'
import style from 'styled-components'
import Profiles from './Profiles'
import { KJW, KJH, LWC, LYS, SWJ, Male, Female, JWY, KHG } from '../../img'

const Team = style.div `
    font-size: 45px;
    font-weight: bold;
    font-family: 'Nanum Gothic',sans-serif;
    line-height: 75px;
    letter-spacing: 10px;
    text-align: center;
    padding-top: 105px;
`;
const Explain = style.div `
    font-size: 18px;
    font-family: 'Nanum Gothic',sans-serif;
    line-height: 35px;
    text-align: center;
    margin-top: 20px;
`;
const Allprofiles = style.div `
    width: 1070px;
    height: 1120px;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 100px;
`;
const Line = style.div `
    max-width: 1068px;
    height: 250px;
    display: flex;
    margin-bottom: 41px;
`;
const MemberProfile = () => {
    return(
        <div id='page-team'>
            <Team>TEAM ENTRY</Team>
            <Explain>
                EntryDSM의 발전과 새로운 이야기를 만드는 사람들 입니다.
            </Explain>
            <Allprofiles>
                <Line>
                    <Profiles
                        name = "김준우"
                        grade = "third"
                        img = { KJW }
                        fb = 'FRONT - END'
                        github = 'https://github.com/junu126'
                    />
                    <Profiles
                        name = "김재훈"
                        grade = "third"
                        img = { KJH }
                        fb = 'BACK - END, DEVOPS'
                        github = 'https://github.com/LumpKim'
                    />
                    <Profiles
                        name = "김해건"
                        grade = "third"
                        img = { KHG }
                        fb = 'UX/UI DESIGNER'
                        github = ''
                    />
                    <Profiles
                        name = "신은주"
                        grade = "third"
                        img = { SWJ }
                        fb = 'BACK - END'
                        github = 'https://github.com/Gaegul'
                    />
                </Line>
                <Line>
                <Profiles
                        name = "장소희"
                        grade = "third"
                        img = { Female }
                        fb = 'FRONT - END'
                        github = 'https://github.com/soheejang15'
                    />
                    <Profiles
                        name = "황신우"
                        grade = "third"
                        img = { Male }
                        fb = 'BACK - END'
                        github = 'https://github.com/huewilliams'
                    />
                    <Profiles
                        name = "김대웅"
                        grade = "second"
                        img = { Male }
                        fb = 'BACK - END'
                        github = 'https://github.com/dkssud9556'
                    />
                    <Profiles
                        name = "오준상"
                        grade = "second"
                        img = { Male }
                        fb = 'FRONT - END'
                        github = 'https://github.com/sema0710'
                    />
                </Line>
                <Line>
                    <Profiles
                        name = "이우찬"
                        grade = "second"
                        img = { LWC }
                        fb = 'FRONT - END'
                        github = 'https://github.com/woochanleee'
                    />
                    <Profiles
                        name = "임용성"
                        grade = "second"
                        img = { LYS }
                        fb = 'BACK - END'
                        github = 'https://github.com/LeagueLugas'
                    />
                    <Profiles
                        name = "정우영"
                        grade = "second"
                        img = { JWY }
                        fb = 'PM, BACK - END'
                        github = 'https://github.com/o-ozogie'
                    />
                    <Profiles
                        name = "김혜준"
                        grade = "first"
                        img = { Female }
                        fb = 'FRONT - END'
                        github = 'https://github.com/hyejun0608'
                    />
                </Line>
                <Line>
                    <Profiles
                        name = "임서영"
                        grade = "first"
                        img = { Female }
                        fb = 'DESIGNER'
                        github = ''
                    />
                    <Profiles
                        name = "전규현"
                        grade = "first"
                        img = { Male }
                        fb = 'FRONT - END'
                        github = 'https://github.com/Ghyeon1215'
                    />
                </Line>
            </Allprofiles>
        </div>
    )
}

export default MemberProfile;