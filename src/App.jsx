import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Sidebar />
        Homepage
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">PORTOLIO</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
