import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage, ShoppingCart, PlaceOrder } from './pages';
import { useSelector } from './redux/hooks'

const PrivateRoute = ({ children }) => {
  const jwt = useSelector(s => s.user.token);
  return jwt ? children : <Navigate to="/signIn" />
}

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:touristRouteId" element={<DetailPage />}></Route>
          <Route path="/search/:keywords" element={<SearchPage />}></Route>
          <Route
            path='/shoppingCart'
            element={
              <PrivateRoute>
                <ShoppingCart />
              </PrivateRoute>
            }
          >
          </Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="*" element={<h1>404 Not Found 页面去了火星</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
