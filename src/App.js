import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import {
  Login,
  Main,
  Signup,
  Story,
  StoryPostDetail,
  Product,
  AdviceDetail,
  Advices,
  Edit,
  Board,
  Order,
} from '../src/pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Cookies } from 'react-cookie'
const cookies = new Cookies()

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, option) //이름,밸류
}

export const getCookie = (name) => {
  return cookies.get(name) //쿠키 가져오기 (이름으로)
}

function App() {
  /*
  console.log("쿠키생성");
  //임시로 생성한 쿠키
  setCookie("login",
  false,
  {path:'/'}
  )

 console.log(getCookie("login"))
*/

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ width: '100vw' }}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/advices" element={<Advices />}></Route>
              <Route path="/advices/:id" element={<AdviceDetail />}></Route>
              <Route path="/event" element={<Board />}></Route>
              <Route path="/story" element={<Story />} />
              <Route path="/story/post" element={<StoryPostDetail />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/order" element={<Order />} />
            </Route>
            <Route path="/editor" element={<Edit />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
