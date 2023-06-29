import './App.css';
import Navbar from './pages/Navbar';
import Saludo from './components/container/Saludo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Saludo prsentacion={'Bienvenidos'} />
     
    </div>
  );
}

export default App;
