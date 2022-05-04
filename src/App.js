import './App.css';
import './index.css';
import SomeComponent from './icon-boop';

function App() {
  return (
    <div className="App">
      <div className='micRounded pulse'>
        <SomeComponent className='micColor load-8 line'/>
      </div>
      <p className='text'>Click on the Mic or wait some seconds to talk</p>
    </div>
  )
}

export default App;
