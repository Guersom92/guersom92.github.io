import Inicio from "./components/inicio";
import Proyectos from "./components/proyectos";
import Footer from "./components/footer";
import Certificates from "./components/certificates";

function App() {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Inicio />
      <Proyectos />
      <Certificates />
      <Footer />
    </>
  );
}

export default App;
