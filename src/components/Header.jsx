import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [isInformasiDropdownOpen, setInformasiDropdownOpen] = useState(false);
    const [isDemografisDropdownOpen, setDemografisDropdownOpen] = useState(false);
    const [isKatalogDropdownOpen, setKatalogDropdownOpen] = useState(false);

    const profileRef = useRef(null);
    const informasiRef = useRef(null);
    const demografisRef = useRef(null);
    const katalogRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
            if (informasiRef.current && !informasiRef.current.contains(event.target)) {
                setInformasiDropdownOpen(false);
            }
            if (demografisRef.current && !demografisRef.current.contains(event.target)) {
                setDemografisDropdownOpen(false);
            }
            if (katalogRef.current && !katalogRef.current.contains(event.target)) {
                setKatalogDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img id="logo-ri" src="/static/img/logo_majalengka.jpeg" alt="logo" className="w-9 h-9 ml-10" />
                        <span id="desa" className="ml-4 -mt-2">Desa Margajaya</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="nav-link">Home</Link>

                        {/* Profile Dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                                className="nav-link"
                            >
                                Profile
                            </button>
                            {isProfileDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">Sejarah</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Visi & Misi</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Informasi Dropdown */}
                        <div className="relative" ref={informasiRef}>
                            <button
                                onClick={() => setInformasiDropdownOpen(!isInformasiDropdownOpen)}
                                className="nav-link"
                            >
                                Informasi
                            </button>
                            {isInformasiDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
                                    <li>
                                        <Link className="dropdown-item" to="#">Berita</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Agenda</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Produk Hukum</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Informasi Publik</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Demografis Dropdown */}
                        <div className="relative" ref={demografisRef}>
                            <button
                                onClick={() => setDemografisDropdownOpen(!isDemografisDropdownOpen)}
                                className="nav-link"
                            >
                                Demografis
                            </button>
                            {isDemografisDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
                                    <li>
                                        <Link className="dropdown-item" to="#">Administrasi</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Penduduk</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Wilayah</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Katalog Dropdown */}
                        <div className="relative" ref={katalogRef}>
                            <button
                                onClick={() => setKatalogDropdownOpen(!isKatalogDropdownOpen)}
                                className="nav-link"
                            >
                                Katalog
                            </button>
                            {isKatalogDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
                                    <li>
                                        <Link className="dropdown-item" to="/wisata">Gallery Wisata</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Gallery Desa</Link>
                                    </li>
                                </ul>
                            )}
                        </div>


                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
