import React from 'react'
import style from 'styled-components'
import { img2016, img2017, img2018, img2019, img2020 } from '../img/About'

const About = style.div `
    font-size: 65px;
    font-weight: bold;
    font-family: 'NanumGothic', sans-serif;
    line-height: 75px;
    letter-spacing: 10px;
    text-align: center;
`;
const Explain = style.div `
    font-size: 20px;
    font-family: 'NanumGothic', sans-serif;
    line-height: 35px;
    text-align: center;
`;
const BottomExplain = style(Explain) `
    margin-bottom: 100px;
`;
const Background = style.div `
    background-color: #ECF3FB;
    font-family: 'NanumGothic', sans-serif;
    width: 100%;
    min-height: 1713px;
`;
const Year = style.div `
    font-size: 26px;
    font-family: 'NanumGothic', sans-serif;
    font-weight: bold;
    line-height: 30px;
`;
const Title = style(Year) `
    font-size:25px;
`;
const Contents = style.div `
    font-size: 16px;
    font-family: 'NanumGothic', sans-serif;
    line-height: 27px;
    max-width: 330px;
    min-width: 230px;
`;
const Img = style.div `
    width: 181px;
    height: 181px;
    border-radius: 91px;
    background-color: white;
    border: 1px solid #707070;
    margin: 0 75px;
    & > img {
        border-radius: 50%;
        margin: 8px
    }
`;
const Flex = style.div `
    display: flex;
    margin-bottom: 62px;
    margin-top: 56px;
    max-width: 900px;
    margin-left: 40px;
`;
const FirstImg = style(Flex) `
    margin-top: 0px;
    padding-top: 100px;
`;
const Right = style(Flex) `
    margin-left: 370px;
`
const Next = style.div `
    margin-left: 525px;
    font-size: 20px;
`;
const Center = style.div `
    max-width: 1080px;
    height: 1713px;
    margin: 0 auto;
`;
const AboutEntry = () => {
    return (
        <div style={{marginTop: '110px'}}>
            <div>
                <About>ABOUT</About>
                <Explain>약 5년 간 서비스를 제공해온 노하우를 바탕으로</Explain>
                <BottomExplain>EntryDSM은 지속적인 성장을 이뤄내고 있습니다.</BottomExplain>
            </div>
            <Background>
                <Center>
                    <FirstImg>
                        <div align="right">
                            <Year>2016</Year>
                            <Title>새로운 시작</Title>
                            <Contents>
                                초대 교장선생님이신 최부영 선생님의 권유로
                                시작된 EntryDSM은 2016년 v1을 출시하여
                                학생들이 프로덕션 환경의 시스템을 구현하고
                                운영하는 데 있어 전반적인 기반을 다졌습니다.
                            </Contents>
                        </div>
                        <Img>
                            <img src={ img2016 }
                                width='165'
                                height='165'
                                alt='img'
                            />
                        </Img>
                    </FirstImg>
                    <Next>▼</Next>
                    <Right>
                        <div>
                            <Img>
                                <img src={ img2017 }
                                    width='165'
                                    height='165'
                                    alt='img'
                                    />
                            </Img>
                        </div>
                        <div>
                            <Year>2017</Year>
                            <Title>두 번째 이야기</Title>
                            <Contents>
                                v1에서 수많은 학생과 교사분들께 받았던 피드백을
                                바탕으로 서비스 품질을 개선하기 위해 매진하였고,
                                이에 아키텍처 설계를 고려하는 등 안정적인 시스템을
                                구현할 수 있도록 노력했습니다.
                            </Contents>
                        </div>
                    </Right>
                    <Next>▼</Next>
                    <Flex>
                        <div align="right">
                            <Year>2018</Year>
                            <Title>세 번째 이야기</Title>
                            <Contents>
                                현업에서 자주 이용되는 기술 스택을 기반으로
                                시스템을 구성하여 사용자 UI, 원서 출력 기능
                                등 다양한 기능들으 안정적 이용과 성능 향상에
                                주력하여 시스템의 완성도를 높였습니다.
                            </Contents>
                        </div>
                        <div>
                            <Img>
                                <img src={ img2018 }
                                    width='165'
                                    height='165'
                                    alt='img'
                                />
                            </Img>
                        </div>
                    </Flex>
                    <Next>▼</Next>
                    <Right>
                        <div>
                            <Img>
                                <img src={ img2019 }
                                    width='165'
                                    height='165'
                                    alt='img'
                                />
                            </Img>
                        </div>
                        <div>
                            <Year>2019</Year>
                            <Title>네 번째 이야기</Title>
                            <Contents>
                                v3 시스템의 성능 한계를 극복하기 위해 비동기
                                프로그래밍을 적용하였고, 실시간 시스템 모니터링 및
                                배포 파이프라인 구성으로 구성원의 작업 환경을 개선했습니다
                            </Contents>
                        </div>
                    </Right>
                    <Next>▼</Next>
                    <Flex>
                        <div align="right">
                            <Year>2020</Year>
                            <Title>새로운 시작</Title>
                            <Contents>
                                오랜 기간 서비스를 개발 • 운영해온 경험을
                                살려 올해도 안정적으로 입학전형시스템을
                                제공하기 위해 준비중입니다.
                            </Contents>
                        </div>
                        <div>
                            <Img>
                                <img src={ img2020 }
                                    width='165'
                                    height='165'
                                    alt='img'
                                />
                            </Img>
                        </div>
                    </Flex>
                </Center>
            </Background>
        </div>
    );
}

export default AboutEntry;