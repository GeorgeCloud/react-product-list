import categoriesAndCount from './data'

function CategoryButtons(){
  return (
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
  )
}

export default CategoryButtons
