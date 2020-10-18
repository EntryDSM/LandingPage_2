import React from 'react'
import style from 'styled-components'

const Question = style.div `
    position: relative;
    width: 1050px;
    height: 90px;
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
    top: 30px;
    cursor: pointer;
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
const Answer = style.div `
    width: 1050px;
    height: 523px;
    margin: 0 auto;
    margin-top: 47px;
    margin-bottom: 69px;
    border: 1px solid #707070;
    padding: 53px 43px;
    & > div {
        font-size: 28px;
        font-family: 'NanumGothic', sans-serif;
        font-weight: bold;
    }
    & > div > p {
        font-size: 25px;
        font-weight: 300;
        font-family: 'NanumGothic', sans-serif;
        margin: 0;
        margin-left: 30px;
    }
    & > div > div {
        width: 85px;
    }
`;
const Flex = style.div `
    display: flex;
    margin-top: 30px;
`;

const EntryQnA = () => {

    return (
        <div id='page-qna'>
            <QnA>
                MEMBER Q&A
            </QnA>
            <div>
                <Question>
                    <p style={{marginTop: '30px'}}>
                        <b>Q1.</b> 엔트리 개발을 하게 된 계기는 무엇인가요?
                    </p>
                    <More>▼</More>
                </Question>
                <Answer>
                    <div>A1.</div>
                    <Flex>
                        <div>임용성</div>
                        <p>
                            이 학교를 준비하던 시절 사용했던 엔트리 사이트를 직접 만들어 보고 싶었습니다. <br />
                            그리고 작게나마 제 실력을 스스로 평가해 보고 싶었습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>정우영</div>
                        <p>
                            보장된 사용자들이 있는 서비스를 개발한다는 점이 끌렸어요. <br />
                            사용자가 있는 서비스를 개발하고 유지보수 하는 경험이 고등학생의 신분으로 <br />
                            흔히 할 수 있는 경험은 아니라고 생각해서 엔트리 개발팀에 합류하게 되었습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>김대웅</div>
                        <p>
                            학교에서 엔트리 정도의 프로젝트를 경험하기 쉽지 않으며, <br />
                            엔트리 프로젝트를 하면서 협업을 배울 수 있고, <br />
                            실제 외부에서 서비스되는 웹 사이트를 개발할 수 있기 때문입니다.
                        </p>
                    </Flex>
                </Answer>
            </div>
            <div>
                <Question>
                    <p style={{marginTop: '30px'}}>
                        <b>Q2.</b> 내가 만들었지만 이건 진짜 크~~ 감탄사 나오는 기능이 있나요?
                    </p>
                    <More>▼</More>
                </Question>
                <Answer>
                    <div>A2.</div>
                    <Flex>
                        <div>오준상</div>
                        <p>
                            가장 만들기 힘들었고, 가장 오래 걸렸던 작성이 멈춘지 3초가 지나면 <br />
                            자동으로 저장되는 기능이 가장 어려웠던 것 같습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>이우찬</div>
                        <p>
                            감탄까진 아니고 회원가입과 비밀번호 재설정에서 쓰이는 <br />
                            이메일 인증 유호기간을 구현하기 위해 타이머 훅을 만들었는데 <br />
                            재사용하기에도 간편하게 잘 짠것 같아서 나름 뿌듯합니다.
                        </p>
                    </Flex>
                </Answer>
            </div>
            <div>
                <Question>
                    <p style={{marginTop: '30px'}}>
                        <b>Q3.</b> 분야를 백엔드/프론트엔드로 결정하게 된 계기가 있나요?
                    </p>
                    <More>▼</More>
                </Question>
                <Answer>
                    <div>A3.</div>
                    <Flex>
                        <div>이우찬</div>
                        <p>
                            웹 개발 분야를 처음 알게 되었을 때 뒤에서 동작하는 것보다 실제 눈으로 볼 수<br />
                            있는 것을 개발하는게 더 재밌을것 같단 생각이 들었습니다. 그후 실제 개발에서<br />
                            흥미를 느꼈고 이를 계기로 쭉 프론트엔드를 공부하는 것 같습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>오준상</div>
                        <p>
                            개발을 하게 된 이유가 내가 사용하던 것들을 직접 만들어보자 라는<br />
                            목표를 가지고 개발을 시작하게 되어서 웹 분야를 하게 되었습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>김대웅</div>
                        <p>
                            처음엔 아무것도 모르고 결정했는데, 백엔드 공부를 하다보니 웹이 어떻게 돌아가는지 <br />
                            알게되고, 서버의 데이터를 내가 관리하고 제공하는 것에 흥미를 가지게 되었습니다.
                        </p>
                    </Flex>
                </Answer>
            </div>
            <div>
                <Question>
                    <p style={{marginTop: '30px'}}>
                        <b>Q4.</b> 개발을 하면서 힘든점이 있다면?
                    </p>
                    <More>▼</More>
                </Question>
                <Answer>
                    <div>A4.</div>
                    <Flex>
                        <div>정우영</div>
                        <p>
                            실제 사용자를 상대로 입학전형이라는 민감한 서비스를 운영하다보니 언제 <br />
                            터질지 모르는 버그와 많은 요구사항을 바탕으로 끊임없는 변경이 필요하고 <br />
                            필요한 기능이 있다면 직접 쌓아가야 하는 부분들이 힘들었습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>김대웅</div>
                        <p>
                            내가 지금까지 몰랐던 새로운 기술을 적용해야 할 때가 제일 힘든 것 같습니다. <br />
                            하지만 적용이 잘 되면 신기하기도 하고, 재미도 있어서 빨리 적용만 잘 시키면 <br />
                            극복할 수 있습니다.
                        </p>
                    </Flex>
                    <Flex>
                        <div>임용성</div>
                        <p>
                            고쳐도 고쳐도 자꾸 발생하는 오류가 많아 골치아픈 경험이 많았습니다.
                        </p>
                    </Flex>
                </Answer>
            </div>
        </div>
    );
}

export default EntryQnA;