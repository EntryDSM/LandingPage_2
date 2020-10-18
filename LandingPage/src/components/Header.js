import React, {} from 'react';
import styled from 'styled-components';

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

    #page-top {
        position: fixed;
        width: 100%;
        height: 100%;
    }

    > .navbar {
        padding: 1rem 1rem;
        position: fixed;
        background: white;
        right: 0;
        left: 0;
        z-index: 1030;
    }
    
    .container {
        display: felx;
        height: 70px;
    }

    .nav-logo {
        display: grid;
        padding: 18px 0;
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
    }

    .nav-link:hover {
        color: #3DFFEB;
        transition: .3s;
    }
`;
// #3DFFEB (메인 컬러)
const Header = () => {
    return (
        <Div id="page-top">
            <nav className="navbar" id="mainNav">
                <div className="container">
                    <div className="nav-logo">
                        <a className="navbar-logo" href="#page-top" style={{fontWeight:700}}>
                        EntryDSM
                        </a>
                        <div className="navbar-logo-underline" />
                    </div>
                    <div className="navbar-collapse">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="">
                                    WHAT IS ENTRYDSM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="">
                                    PORTFOLIO
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="">
                                    TEAM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="">
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