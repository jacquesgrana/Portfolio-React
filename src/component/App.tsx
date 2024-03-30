import React from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import { Outlet } from 'react-router-dom';

//import '../App.css';

const App = () => {
  return (
    <div className="App"  id="container_all">
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
    </div>
  );
}

export default App;
