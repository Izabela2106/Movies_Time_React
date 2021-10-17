import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Movies from './Movies';
import Modal from './Modal';
import { useGlobalContext } from './context';

function App() {
  const { modalContent } = useGlobalContext();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="page-center">
        <Sidebar />
        <Movies />
        <Modal modalContent={modalContent} />
      </div>
    </>
  );
}

export default App;
