import logo from './logo.svg';
import TasklistComponent from './components/container/task_list';
//import Greeting from './components/pure/greeting';
import './App.css';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/ejercicio';
import { Father } from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import ResgisterFormik from './components/pure/forms/resgisterFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
//import Clock from './components/pure/clock';
// import Greetingf from './components/pure/greetingf';

function App() {
  return (
    <div className="App">
      <header className="App-headerr">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="martin"/> */}
        {/* <Greetingf name={"martin"} /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
        
          Learn React
        </a> */}
          {/* listado de tareas */}
          {/* <TasklistComponent/> */}
          {/* <GreetingStyled name="david"/> */}
          {/* <Clock></Clock> */}
           {/* <TasklistComponent/>  */}
          {/* <Father /> */}



          {/* ejemplos de renderizado condicional */}

          {/* <OptionalRender/> */}



          {/* ejemplos de uso de formik y yup */}
          {/* <LoginFormik/> */}
        {/* <ResgisterFormik/> */}




        {/* ejemplos de porocesos asincronos */}
        {/* <AsyncExample/> */}
      </header>
    </div>
  );
}

export default App;
