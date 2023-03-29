import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../components/Accounts';
import Home from '../components/Home';
import UserAuthC from '../context/UserAuthC';
import ForgotPassword from '../components/ForgotPassword';
import MockComponent from '../components/MockComponent';
import ReceiptContainer from '../components/Receipt/ReceiptContainer';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<UserAuthC><Home/></UserAuthC>}/>
            <Route exact path="/accounts" element={<Accounts/>}/>
            <Route exact path="/login/forgotPassword" element={<UserAuthC><ForgotPassword/></UserAuthC>}/>
            <Route exact path="/mock" element={<MockComponent></MockComponent>}/>
            <Route exact path="/receipt" element={<ReceiptContainer></ReceiptContainer>}/>
            <Route path='*' element={<UserAuthC><Home/></UserAuthC>}/>
        </Routes>
    </BrowserRouter>
  );
}