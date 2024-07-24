import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

function App({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default App;
