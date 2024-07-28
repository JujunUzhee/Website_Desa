import React from 'react';
import AdministrasiComponents from '../components/AdministrasiComponents';
import Header from '../components/Header';

const Administrasi = () => {
    return (
        < ><Header />
            <div className="p-4">
                <AdministrasiComponents />
            </div>
        </>
    )
}

export default Administrasi;
