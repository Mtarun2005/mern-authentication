import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App(){
  const token=localStorage.getItem("token");
  console.log("token in app",token)
  return (
    <div className="page-center">
      {token ? <Profile /> : <Login />}
    </div>
  );
}

export default App;