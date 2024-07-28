import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//BrowserRouter을 router이라는 이름으로 가져옴
//routes: 여러 route들을 그룹화하여 네비게이션을 정의하는데 사용
//route: 특정 경로와 해당 경로에서 렌더링될 컴포넌트 정의
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
//home,login,signup,dashboard: 각 경로에 대해 렌더링될 페이지 컴포넌트
import './App.css';

function App() {
  return (
    <Router>//url변화를 감지하고 적절한 라우트를 렌더링함 - browserrouter을 사용하여 url관리
      <div className="App">
      //해당 div요소에 App이라는 css클래스를 적용한다(react에서는 class 대신 classname을 사용)
        <Routes>//여러 route를 감싸는 역할 - 네비게이션 트리
          <Route path="/" element={<Home />} />
          //path="/":루트경로-사용자에게 첫번째로 보여지는 페이지(일반적으로 애플리케이션의 홈페이지)
          //home컴포넌트가 렌더링됨
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
