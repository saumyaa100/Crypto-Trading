// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { DividerHorizontalIcon } from '@radix-ui/react-icons'
import {Button} from './components/ui/button'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import Withdrawal from './page/Withdrawal/Withdrawal'
import PaymentDetails from './page/PaymentDetails/PaymentDetails'
import StockDetails from './page/StockDetails/StockDetails'
import Watchlist from './page/Watchlist/Watchlist'
import Profile from './page/Profile/Profile'
import Notfound from './page/Notfound/Notfound'
import SearchCoins from './page/Search/SearchCoins'
import Auth from './page/Auth/Auth'
function App() {

  return (
  <>
  {/* <Auth/> */}
 {/* { false && */}
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/withdrawal' element={<Withdrawal/>}/>
      <Route path='/payment-details' element={<PaymentDetails/>}/>
      <Route path='/market/:id' element={<StockDetails/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/search' element={<SearchCoins/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </div>
  {/* } */}
    
  
  </>
  )
}

export default App
