import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header, Navbar, StayList } from './components';
import { staysActions } from './actions';

import dataJson from './data/stays.json';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(staysActions.setStays(dataJson));
  }, []);

  return (
    <div className="app app__flex">
      <Navbar />
      <main className='app__flex'>
        <Header />
        <StayList />
      </main>
    </div>
  );
}

export default App;
