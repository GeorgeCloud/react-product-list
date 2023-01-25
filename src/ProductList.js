import data from '../src/data'
import './ProductList.css'

function ProductList(props){
  const { category } = props;

  return (
    <div className="ProductList">
      {data.filter(obj => obj.category === category).map(obj => {
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
  )
}

export default ProductList
