import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <h1>My App </h1>
      <Footer /> 
      <Team/> 
    </div>
  );
}

export default App;
