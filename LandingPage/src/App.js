import React, { useState } from 'react';
import AboutEntry from './components/AboutEntry';
import Footer from './components/Footer';
import MemberProfile from './components/MemberProfile/MemberProfile';
import EntryQnA from './components/EntryQnA'
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import MainBtn from './components/MainBtn';
import ServiceEntry from './components/ServiceEntry';
import Portfolio from './components/Portfolio';
import MainModal from './components/MainModal';
import AdminModal from './components/AdminModal';
import QnaModal from './components/QnaModal';

function App() {
  const [clickedNumber, setClickedNumber] = useState(0);
  return (
    <>
      {
        clickedNumber === 1 && <MainModal setClickedNumber={setClickedNumber} /> ||
        clickedNumber === 2 && <AdminModal setClickedNumber={setClickedNumber} /> ||
        clickedNumber === 3 && <QnaModal setClickedNumber={setClickedNumber} />
      }
    {
      <div>
        <GlobalStyle isModalOpen={clickedNumber !== 0} />
        <Header />
        <MainBtn />
        <ServiceEntry />
        <Portfolio setClickedNumber={setClickedNumber} />
        <AboutEntry />
        <MemberProfile />
        <EntryQnA />
        <Footer />
      </div>
    }
    </>
  );
}

export default App;
