import React from 'react';
import AboutEntry from './components/AboutEntry';
import Footer from './components/Footer';
import MemberProfile from './components/MemberProfile/MemberProfile';
import EntryQnA from './components/EntryQnA'
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import MainBtn from './components/MainBtn';
import ServiceEntry from './components/ServiceEntry';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainBtn />
      <ServiceEntry />
      <Portfolio />
      <AboutEntry />
      <MemberProfile />
      <EntryQnA />
      <Footer />
    </div>
  );
}

export default App;
