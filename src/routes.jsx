import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Profile from './pages/Profile';
import Informasi from './pages/Informasi';
import Wisata from './pages/Wisata';
import WisataDetail from './components/WisataDetail';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="profile" element={<Profile />} />
            <Route path="informasi" element={<Informasi />} />
            <Route path="wisata" element={<Wisata />} />
            <Route path="wisata/detail/:id" element={<WisataDetail />} />
        </Routes>
    );
}
