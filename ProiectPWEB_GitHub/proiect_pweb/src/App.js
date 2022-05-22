import './App.css';
import HomeAdmin from './components/HomeAdmin';
import HomeUser from './components/HomeUser';
import MainPage from './components/MainPage';
import AccessDenied from './components/AccessDenied';
import ErrorPage from './components/ErrorPage';
import AdminFundraisers from './components/AdminFundraisers';
import AdminFundraisersAdd from './components/AdminFundraisersAdd';
import AdminNews from './components/AdminNews';
import AdminNewsAdd from './components/AdminNewsAdd';
import AdminSafeLocations from './components/AdminSafeLocations';
import AdminSafeLocationsAdd from './components/AdminSafeLocationsAdd';
import AdminAlerts from './components/AdminAlerts';
import AdminAlertsAdd from './components/AdminAlertsAdd';
import UserNews from './components/UserNews';
import UserSafeLocations from './components/UserSafeLocations';
import UserFundraisers from './components/UserFundraisers';
import UserAlerts from './components/UserAlerts'
import AdminRequests from './components/AdminRequests';
import UserRequestsAdd from './components/UserRequestsAdd';
import Contact from './components/Contact';
import Profile from './components/Profile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/HomeUser" element={<HomeUser />} />
        <Route path="/AccessDenied" element={<AccessDenied />} />
        <Route path="/AdminFundraisers" element={<AdminFundraisers />} />
        <Route path="/AdminFundraisersAdd" element={<AdminFundraisersAdd />} />
        <Route path="/AdminNewsAdd" element={<AdminNewsAdd />} />
        <Route path="/AdminNews" element={<AdminNews />} />
        <Route path="/AdminSafeLocations" element={<AdminSafeLocations />} />
        <Route path="/AdminSafeLocationsAdd" element={<AdminSafeLocationsAdd />} />
        <Route path="/AdminAlerts" element={<AdminAlerts />} />
        <Route path="/AdminAlertsAdd" element={<AdminAlertsAdd />} />
        <Route path="/UserNews" element={<UserNews />} />
        <Route path="/UserSafeLocations" element={<UserSafeLocations />} />
        <Route path="/UserFundraisers" element={<UserFundraisers />} />
        <Route path="/UserAlerts" element={<UserAlerts />} />
        <Route path="/AdminRequests" element={<AdminRequests />} />
        <Route path="/UserRequestsAdd" element={<UserRequestsAdd />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
