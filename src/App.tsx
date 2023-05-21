import React from 'react';
import './scss/style.scss'
import { Routes, Route } from 'react-router-dom';
import MenuLayout from './components/layouts/MenuLayout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NoteFound from './pages/NoteFound'


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MenuLayout />}>
        <Route path='' element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<NoteFound />} />
      </Route>
    </Routes>
  );
}

export default App;