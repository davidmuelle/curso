import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage"
import TaskDetailpage from "./pages/tasks/TaskDetailpage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect } from "react";
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {
  // Estas son las credenciales que creamos en loginformik y que utilizamos en loginpage
  let logged = false



  let taskList = [
    {
      id: 1,
      name: 'task 1',
      description: 'my first task'
    },
    {
      id: 2,
      name: 'task 2',
      description: 'my second task'
    }
  ]

const id =useParams()

  //esto es para ponerle un valor inicial
  useEffect(() => {
    logged = localStorage.getItem('credentials')

  }, []);

  return (
    <Router>
      <>
        <aside>
          <Link to='/'>|HOME|</Link>
          <Link to='/about'>|ABOUT|</Link>
          <Link to='/faqs'>|FAQS|</Link>
          <Link to='/task/1'>|task 1|</Link>
          <Link to='/task/2'>|task 2|</Link>
        </aside>
        <main>

          <Routes>
            {/* para crear una ruta tenemos que poner el route y dentro el path que va a ser 
            la ruta que se pondrá en el navegador y en component el componente que va a mostrarse */}
            <Route exact path='/' Component={HomePage} />
            <Route exact path='/online-state' Component={StatePage} />
            <Route path="/login" Component={logged ? () => <Navigate to='/' /> : LoginPage} >


            </Route>
            <Route path="/profile" Component=
              {

                logged ? ProfilePage : () => <Navigate to='/login' />
              }
            >
            </Route>

            <Route path="/tasks" Component={TasksPage} />
            
            {/* con esto en el path estamos pasando el id por la ruta */}
            {/* PREGUNTAR A LAUREANO */}
            <Route exact path="/task/:id" element={<TaskDetailpage task={taskList[0]} />} />
            
            {['about', 'faqs'].map((path) => (
              <Route path={path} element={<AboutPage />} />
            ))}

            <Route path="*" Component={NotFoundPage} />

          </Routes>
        </main>
      </>


    </Router>
  );
}

export default AppRoutingOne;



