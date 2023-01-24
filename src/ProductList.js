import data from '../src/data'
// import classNames from 'classNames'

function ProductList(){
  return (
    <div className="productList">
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
  )
}

export default ProductList
