import React from 'react';

const SejarahComponents = () => {
    return (
        <div className="p-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Sejarah Desa Kami</h1>

                {/* Main Image and Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <img
                            src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
                            alt="Sejarah Desa"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <p className="mb-4">
                            Desa kami didirikan pada awal tahun 1900-an dengan visi untuk menciptakan komunitas yang harmonis dan sejahtera.
                            Dimulai dengan beberapa keluarga yang penuh semangat, desa kami kini telah berkembang pesat.
                        </p>
                        <p>
                            Selama bertahun-tahun, kami telah berinovasi dalam berbagai bidang dan terus menjaga tradisi serta kebudayaan yang ada.
                        </p>
                    </div>
                </div>

                {/* Timeline Section */}
                <h2 className="text-3xl font-bold mb-4">Garis Waktu</h2>
                <div className="timeline mb-8">
                    <div className="timeline-item mb-6 border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">1900 - Didirikan</h3>
                        <p>
                            Desa ini didirikan oleh sekelompok keluarga yang memiliki tujuan untuk membangun komunitas yang harmonis.
                        </p>
                    </div>
                    <div className="timeline-item mb-6 border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">1950 - Pembangunan Pertama</h3>
                        <p>
                            Pembangunan infrastruktur pertama dilakukan, seperti jalan dan jembatan, yang meningkatkan konektivitas desa.
                        </p>
                    </div>
                    <div className="timeline-item mb-6 border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">2000 - Pengembangan Pendidikan</h3>
                        <p>
                            Dibangunnya sekolah dan pusat pelatihan keterampilan untuk meningkatkan kualitas pendidikan di desa.
                        </p>
                    </div>
                    <div className="timeline-item mb-6 border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold">2020 - Desa Digital</h3>
                        <p>
                            Implementasi teknologi digital untuk mendukung kegiatan ekonomi dan sosial masyarakat desa.
                        </p>
                    </div>
                </div>

                {/* Key Events Accordion */}
                <h2 className="text-3xl font-bold mb-4">Peristiwa Utama</h2>
                <div className="accordion">
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item1').classList.toggle('hidden')}
                        >
                            Pendirian Desa
                        </button>
                        <div id="item1" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Desa kami didirikan pada tahun 1900 oleh beberapa keluarga yang memiliki visi untuk menciptakan komunitas yang harmonis dan sejahtera.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item2').classList.toggle('hidden')}
                        >
                            Pembangunan Infrastruktur
                        </button>
                        <div id="item2" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Pada tahun 1950, dilakukan pembangunan infrastruktur pertama seperti jalan dan jembatan untuk meningkatkan konektivitas desa.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item3').classList.toggle('hidden')}
                        >
                            Pengembangan Pendidikan
                        </button>
                        <div id="item3" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Pada tahun 2000, dibangun sekolah dan pusat pelatihan keterampilan untuk meningkatkan kualitas pendidikan di desa.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item4').classList.toggle('hidden')}
                        >
                            Implementasi Teknologi Digital
                        </button>
                        <div id="item4" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Pada tahun 2020, desa kami mulai mengimplementasikan teknologi digital untuk mendukung kegiatan ekonomi dan sosial masyarakat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SejarahComponents;
