import Home from './components/Home'
import Projects from'./components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="one">
      <Home/>
      </section>
      <section className="two" >
       <Projects/>
      </section>
      
    </div>
  );
}

export default App;
