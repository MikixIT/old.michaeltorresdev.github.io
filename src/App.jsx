import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
        <Sidebar />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">PORTOLIO</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
