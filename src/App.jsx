import './App.css'
import logo from './img/logo.png'
import banner from './img/banner.png'

function TituloFormulario (props){
  return (
    <h2>
      {props.children}
    </h2>    
  )
}

function FormularioDeEventos(){
  return(
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario> 

      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evento?
        </label>
        <input type="text" id="nome" placeholder="Summer dev this" />
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="" />
      </header>  

      <section>
        <img src={banner} alt="" />
      </section>  

      <FormularioDeEventos/>     
    </main>
  );
}

export default App;