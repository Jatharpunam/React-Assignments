import { useState } from 'react';
import './App.css';
import Fruits from './components/Fruits';
import Greetings from './components/Greetings';
import GreetingsClassBased from './components/GreetingsClassBased';
import ChangeHeading from './components/ChangeHeading';
import Calculator from './components/Calculator';
import Vegetables from './components/Vegetables';
import ContactForm from './components/ContactForm/ContactForm';
import fruitsData from '../data.js'

function App() {
  const [jobTitle, setJobTitle] = useState('FullStack Developer');

  return (
   

<>
    <fruitsData/>
      <ContactForm/>
      <Vegetables/>

      <div className="container">
       <Fruits />
      <Calculator />
      <ChangeHeading />
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
    </>
  );
}


export default App;
