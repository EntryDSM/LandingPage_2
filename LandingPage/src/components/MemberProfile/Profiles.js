import React from 'react'
import style from 'styled-components'

const Profile = style.div `
    margin-right: 3.6vw;
`;
const Img = style.div `
    position: relative;
    width: 209px;
    height: 209px;
    border-radius: 105px;
    & > img {
        border-radius: 50%;
        margin: 8px
    }
    & > img:hover {
        opacity: 0.4;
        + div {
            opacity: 1;
        }
        + div:hover {
            opacity: 1;
        }
    }

`;
const Grade = style(Img) `
    border: ${props => props.grade === 'first' ? '1px solid #0015D5' : props.grade === 'second' ? '1px solid #707070' : '1px solid #FFEE00'};
    & > div {
        opacity: 0;
    }
`;
const FB = style.div `
    position: absolute;
    width: 100%;
    margin-top: 7px;
    text-align: center;
    top: 70px;
    font-family: 'NanumGothic', sans-serif;
    font-size: 18px;
    font-weight: bold;
`;
const Github = style.button `
    position: absolute;
    bottom: 70px;
    left: 70px;
    font-size: 16px;
    font-family: 'NanumGothic', sans-serif;
    font-weight: bold;
    background-color: white;
    border: none;
`;
const Name = style.div `
    font-size: 25px;
    font-weight: bold;
    font-family: 'NanumGothic', sans-serif;
    margin-left: 68px;
    margin-top: 7px;
`;

const Profiles = props => {
    const { name, grade, img, fb, github} = props;
    return (
        <div>
            <Profile>
                <Grade grade={ grade }>
                    <img src={ img }
                        width='194'
                        height='194'
                        border-radius='100'
                        alt='profile' />
                    <div>        
                        <FB>{ fb }</FB>
                        <Github>
                            <a href={ github } target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'black'}}>Github</a>
                        </Github>
                    </div>
                </Grade>
                <Name>{ name }</Name>
            </Profile>
        </div>
    );
}

export default Profiles;