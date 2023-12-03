import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource';
import PatientHome from './components/PatientHome/PatientHome';
import PatientHomeupd from './components/PatientHome/PatientHomeupd';
import List2 from './pages/list/List2';
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
    {/* Home route */}
    <Route exact path="/nursehome" element={<Home />} />
    <Route exact path="/patienthome" element={<PatientHome />} />
    <Route exact path="/logstatus" element={<LogStatus/>} />
    <Route exact path="/datasubcription" element={<DataSubscriptionPage/>} />
    <Route exact path="/usersettings" element={<UserSettings/>} />
    
    <Route exact path="/patienthomeupd" element={<PatientHomeupd />} />
    {/* Users routes */}
    <Route exact path="/users" element={<List />} />
    <Route exact path="/users2" element={<List2 />} />
    <Route exact path="/users/:userId" element={<Single />} />
    <Route exact path="/users/new" element={<New inputs={userInputs} title="Add New User" />} />
    {/* Products routes */}
    <Route exact path="/products" element={<List />} />
    <Route exact path="/products/:productId" element={<Single />} />
    <Route exact path="/products/new" element={<New inputs={productInputs} title="Add New Product" />} />
  </Routes>
</BrowserRouter>
    </div>
  )
}
