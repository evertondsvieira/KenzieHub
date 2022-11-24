import "./App.css";
import "./reset.css";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes";
import Global from './styles/global.module';

function App() {
  return (
    <div className="div-main">
      <AuthProvider>
        <Global />
        <Routes />
      </AuthProvider>
    </div>
  )
}

export default App;