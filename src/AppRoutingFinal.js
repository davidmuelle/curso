import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import NotFoundPage from './pages/404/NotFoundPage'

import LoginPage from "./pages/auth/LoginPage";


import DashBoard from "./pages/dashboard/DashBoard";
import TasksPage from "./pages/tasks/TasksPage";
import ResgisterFormik from "./components/pure/forms/resgisterFormik";
function AppRoutingFinal() {
  let loggedin =true
  let register=true
  



  return (
    <>
      <Router>

        <Routes>






          {/* Vamos a controlar la entrada a la ruta de dashboard si no estamos loggueados */}

          <Route path='/' element={loggedin && register ? <DashBoard /> : <Navigate to='/login'/>} />

          <Route path='/dashboard' element={loggedin ? <DashBoard /> : <Navigate to='/login'/>} >
          </Route>
         <Route path="/task" element={loggedin ? <TasksPage/>:<Navigate to="/login"/>} />

          <Route path="/register" element={register?<ResgisterFormik/>:<Navigate to="/login"/>}/>
           



          {/* Rutas predeterminadas */}
          <Route exact path="/task" element={<TasksPage/>}/>

          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path='/register' element={<ResgisterFormik/>}/>

          <Route element={<NotFoundPage />} />



        </Routes>

      </Router>

    </>
  );
}

export default AppRoutingFinal;


