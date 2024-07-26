import React from 'react';
import PendudukComponents from '../components/PendudukComponents';
import App from "../layouts/App";

const Penduduk = () => {
    return (
        <App>
            <div className="p-4">
                <PendudukComponents />
            </div>
        </App>
    )
}

export default Penduduk;
