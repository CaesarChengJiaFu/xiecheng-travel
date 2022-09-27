import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:touristRouteId" element={<DetailPage />}></Route>
          <Route path="*" element={<h1>404 Not Found 页面去了火星</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
