import './App.scss';
import Welcome from './welcome_page/Welcome.jsx';

function App() {
  return (
    <div className="App">
      <div className="logo">
        {/* <img src="../logo.png" alt="" /> */}
        <Welcome></Welcome>
      </div>
    </div>
  );
}

export default App;
