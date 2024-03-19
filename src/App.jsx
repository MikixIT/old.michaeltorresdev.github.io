import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Sidebar />
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
