import React, { useState } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';

const MainPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="h-screen bg-blue-50 text-4xl">
      <Header setTab={setTab} tab={tab} />
      {tab == 0 && <LandingPage />}
    </div>
  );
};

export default MainPage;
