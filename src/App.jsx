import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TableSection from "./components/TableSection";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Hero />
    <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-6">
      <main className="flex-1">
        <Article />
        <TableSection />
      </main>
      <Aside />
    </div>
    <Footer />
    </>
  )
}

export default App
