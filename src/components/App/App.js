import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ImageList from '../ImageList/ImageList';


function App() {
  return (
    <div className="App">
      <h1>Solo Spike</h1>
      <ImageList/>
    </div>
  );
}


export default App;
