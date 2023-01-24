import logo from './logo.svg';
import './App.css';

// Challenge 7
import data, { allCategories, categoriesSet, categoriesAndCount } from './data'

function App() {

  return (
    <div className="App">
      <h1>Product List</h1>
      <p>Count: {data.length}</p>
      <p>Category Count: {categoriesSet.size}</p>

      <div className="categoryButtons">
        {categoriesAndCount.map(obj => {
          return(
            <button key={obj.name}>
              {obj.name}
                <span> {obj.count} </span>
            </button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
