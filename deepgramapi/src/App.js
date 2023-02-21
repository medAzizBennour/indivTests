
import SpeechRecog from './speechRecognition/SpeechRecog'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<SpeechRecog />} />
          <Route path='*' element={<SpeechRecog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

