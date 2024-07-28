
import { RiBriefcase2Fill, RiCommunityLine } from "react-icons/ri";
import { FaBookMedical, FaMosque } from "react-icons/fa";
import BeritaComponents from '../components/BeritaComponents';
import Header from '../components/Header';
import Footer from "../components/Footer";


export default function Beranda() {
    return (
        <>
            <Header />
            <div className="container mx-auto py-4">
                <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-5">
                    <div className="md:w-1/2 p-5">
                        <h1 className='text-2xl font-bold'>Selamat Datang Di Desa Margajaya</h1>
                        <p>Margajaya merupakan sebuah desa yang terletak dalam (daerah) kecamatan Lemahsugih, Kabupaten Majalengka, Provinsi Jawa Barat, Indonesia.</p>
                        <p>Kode Pos yang digunakan di Margajaya adalah 45465. Terdapat buah desa di dalam daerah kecamatan Lemahsugih.</p>
                        <p>Desa Margajaya memiliki potensi ekonomi dan wisata yang besar dimana desa ini terkenal sebagai desa dengan produktifitas pertanian yang baik. Salah satu komitas unggulannya adalah padi dan sayuran.</p>
                        <button className="btn btn-primary mt-3">
                            Selengkapnya
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/static/desa.jpg" className="w-full h-auto p-5 object-contain" alt="Desa Margajaya" />
                    </div>
                </div>
            </div>

            {/* card title */}
            <div className="container mx-auto mt-5">
                <div className="flex justify-center">
                    <div className="bg-transparent border-0 p-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex justify-center items-center md:w-1/3">
                                <img src="/static/logo-bangkalan.png" className="w-1/2 h-auto mx-auto rounded-lg" alt="Logo Bangkalan" />
                            </div>
                            <div className="md:w-2/3">
                                <div className="p-4">
                                    <p>
                                        Website resmi desa, kec tanah merah kab bangkalan jawa timur. Media komunikasi dan transparansi pemerintah untuk seluruh masyarakat desa rongdurin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid autem commodi dignissimos distinctio ducimus facilis fuga fugiat, incidunt labore minus mollitia nihil numquam obcaecati odio provident quisquam sit unde!
                                    </p>
                                    <a href="/"><button className='btn btn-primary rounded-3'>Profil desa</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistic Desa */}
            <div className='container mx-auto text-center mt-10'>
                <h2 className='text-2xl font-bold'>Statistic Desa</h2>
                <p className="text-lg text-gray-600">Berikut adalah statistic demografi desa kami</p>

                <div className="flex flex-wrap justify-center mt-5">
                    <div className="p-4 md:w-1/4">
                        <div className="bg-red-100 text-red-700 rounded-3xl p-6 flex flex-col items-center">
                            <RiBriefcase2Fill className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Pekerjaan</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="bg-blue-100 text-blue-700 rounded-3xl p-6 flex flex-col items-center">
                            <RiCommunityLine className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Pendidikan</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="bg-yellow-100 text-yellow-700 rounded-3xl p-6 flex flex-col items-center">
                            <FaMosque className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Agama</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="bg-green-100 text-green-700 rounded-3xl p-6 flex flex-col items-center">
                            <FaBookMedical className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Usia Penduduk</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Berita */}
            <BeritaComponents />
            <Footer />
        </>
    );
}
