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
            <button>
              {obj.name}
                <span> {obj.count} </span>
            </button>
          )
        })}
      </div>

      <div className="products">
        {data.map(obj => {
            return (
              <div>
                <h2>{ obj.name }</h2>
                <p>{ obj.price }</p>
                <p>
                  <small>
                    Category: <u>{ obj.category }</u> Rating: <u>{ obj.rating }</u>
                  </small>
                </p>
              </div>
            )
        })}

      </div>
    </div>
  );
}

export default App;
