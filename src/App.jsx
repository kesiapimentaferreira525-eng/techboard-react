import './App.css';
// 1. Você importou corretamente aqui:
import logo from './img/logo.png';
import banner from './img/banner.png';

function TituloFormulario({ children }) {
  return <h2>{children}</h2>;
}

function CampoDeFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function Input({ id, type = "text", placeholder }) {
  return <input id={id} type={type} placeholder={placeholder} />;
}

function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>

      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <Input
          id="nome"
          placeholder="Summer dev this"
        />
      </CampoDeFormulario>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="Logo" />
      </header>

      <section>
        <img src={banner} alt="Banner" />
      </section>

      <FormularioDeEventos />
    </main>
  );
}

export default App;