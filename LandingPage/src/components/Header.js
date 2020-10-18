import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { headlogo } from '../img';

const Div = styled.div`
    /* @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap'); */

    a {
        text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #page-top {
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .navbar {
        padding: 1rem 1rem;
        position: fixed;
        background: white;
        right: 0;
        left: 0;
        z-index: 1030;
    }
    
    .container {
        display: felx;
        height: ${(props) => props.height && props.height}px;
        transition: .5s;
    }

    .nav-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .navbar-logo {
        font-size: 27px;
        font-family: 'BBTreeG_B';
        color: black;
    }

    .navbar-logo-underline {
        height: 4px;
        text-align: center;
        border: 1px solid #3DFFEB;
        border-radius: 15%;
        background: #3DFFEB;
    }

    .navbar-collapse {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
    
    .nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nav-item {
        list-style: none;
        float: left;
        margin-right: 5%;
    }

    .nav-link {
        color: black;
        font-family: 'BBTreeG_R';
        transition: .6s;
        scroll-behavior: smooth
    }

    .nav-link:hover {
        color: #3DFFEB;
        transition: .3s;
    }
`;
// #3DFFEB (메인 컬러)
const Header = () => {
    const [height, setHeight] = useState(70)
    useEffect(() => {
        window.addEventListener('scroll', () => {
           if (window.scrollY > 200) {
               setHeight(30);
           } else {
               setHeight(70);
           }
        })
    }, [])
    return (
        <Div id="page-top" height={ height }>
            <nav className="navbar" id="mainNav">
                <div className="container">
                    <div className="nav-logo">
                        <a className="navbar-logo" href="#page-top">
                            <img src={ headlogo } alt='headlogo' />
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-main">
                                    WHAT IS ENTRYDSM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-portfolio">
                                    PORTFOLIO
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-about">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-team">
                                    TEAM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-qna">
                                    MEMBER Q&A
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Div>
    )
}

export default Header;