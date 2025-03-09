import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to My Porfolio!
        </h1>
        <AboutMe
          description="I am a seasoned network engineer transitioning to Software Development learning to use React. I also do free netork security consultations"
          age='38'
          color="Red"
          skills={[
            {name: "Python", experience: "5 years"},
            {name: "Networking", experience: "10 years"},
            {name: "SQL", experience: "5 years"}
            
          ]}
        />
        
        <a
          className="App-link"
          href="https://diazcybersolutions.carrd.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my consultation webpage!
        </a>
        
      </header>
    </div>
  );
}

export default App;
