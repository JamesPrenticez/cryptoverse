import React from 'react'
import './App.css' 
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space} from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
      <main className='main'>
        <Layout>
          <div className='route'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} />
              <Route exact path='/news' element={<News/>}/>
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </main>
    </div>
  )
}

export default App