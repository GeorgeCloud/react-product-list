import logo from './logo.svg';
import './App.css';
import data from './data.js'

// Challenge 2: Use set and push each object category
const allCategories = data.map(obj => obj.category)

// Challenge 3: Use set and push each object category
const categories = new Set();
data.map(obj => categories.add(obj.category));

// Challenge 4: Dicationary with category count
const categoryCount = allCategories.reduce((obj, cat) => {
  if (obj.hasOwnProperty(cat)){
    obj[cat] += 1;
  } else {
    obj[cat] = 0;
  }
  return obj
}, {})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
