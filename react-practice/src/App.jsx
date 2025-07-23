import { useState } from 'react';
import './App.css';
import Fruits from './components/Fruits';
import Greetings from './components/Greetings';
import GreetingsClassBased from './components/GreetingsClassBased';
import ChangeHeading from './components/ChangeHeading';
import Calculator from './components/Calculator';

function App() {
  const [jobTitle, setJobTitle] = useState('FullStack Developer');

  return (
    <div className="container">

      <Calculator />
      <ChangeHeading />
      <Fruits />
      <Greetings studName="Punam" marks={95} />
      <GreetingsClassBased studName="Punam" />

      <div className="section text-center">
        <h3>
          👩‍💻 Job Title: <span className="job-box">{jobTitle}</span>
        </h3>
        <button className="btn btn-dark mt-3" onClick={() => setJobTitle('Senior Developer')}>
          🔄 Update Job Title
        </button>
      </div>
    </div>
  );
}

export default App;
