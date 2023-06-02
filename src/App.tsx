import { FC } from 'react';
import './scss/style.scss'
import { Routes, Route } from 'react-router-dom';
import MenuLayout from './components/layouts/MenuLayout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Basket from './pages/Basket';
import NoteFound from './pages/NoteFound'


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MenuLayout />}>
        <Route path='' element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='basket' element={<Basket />} />
        <Route path='*' element={<NoteFound />} />
      </Route>
    </Routes>
  );
}

export default App;
