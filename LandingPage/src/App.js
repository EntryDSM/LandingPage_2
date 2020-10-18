import React from 'react';
import AboutEntry from './components/AboutEntry';
import Footer from './components/Footer';
import MemberProfile from './components/MemberProfile/MemberProfile';
import EntryQnA from './components/EntryQnA'
function App() {
  return (
    <div>
      <AboutEntry />
      <MemberProfile />
      <EntryQnA />
      <Footer />
    </div>
  );
}

export default App;
