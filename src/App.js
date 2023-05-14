import './App.css';
import {AuthProvider} from "./store/AuthContext";
import {Routes,Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
      <AuthProvider>
            <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
                  <Route exact path='/' element={<LandingPage />}/>
            </Route>
                  <Route path="/login" element = {<LoginPage/>} />
            </Routes>
        </AuthProvider>
  );
}

export default App;
