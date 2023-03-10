import "./App.css";
import Header from "./Components/Header";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import { useSelector } from "react-redux";
import Routers from "./routes/Routers";
function App() {
  const IsAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  console.log(IsAuthenticated, "--");
  return (
    <div className="App">
      <Header />
      {IsAuthenticated ? <Routers /> : <Auth />}
    </div>
  );
}

export default App;
