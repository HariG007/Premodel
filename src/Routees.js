import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import LogStatus from '../src/pages/LogStatus/LogStatus';
import DataSubscriptionPage from './pages/DataSubcription/DataSubcription';
import UserSettings from './pages/UserSettings/UserSettings';

export default function Routees() {
  return (
    <div>
 <BrowserRouter>
  <Routes>
    {/* Default route to Login */}
    <Route exact path="/" element={<Home/>} />
    {/* Users routes */}
    <Route exact path="/logstatus" element={<LogStatus/>} />
    <Route exact path="/datasubcription" element={<DataSubscriptionPage/>} />
    <Route exact path="/usersettings" element={<UserSettings/>} />
      <Route exact path="/mapview" element={<MapView/>}/>
  </Routes>
</BrowserRouter>
    </div>
  )
}
