import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <>
    <main className="App">
      {/* this {} is not an Obj or code block it represent that in this position we are putting expression */}
      {user ? 
      <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />

      </Routes> 
      </>
        :
      <AuthPage setUser={setUser} />}
    </main>
    </>
  );
}
