import React from 'react'

export default function Child({ id, pName, price, desc, onSale, count, deleteProduct }) {
  return (
     <div className="col-md-3">
      <div className="card bg-warning text-center item shadow-lg p-4 mb-4 rounded position-relative">
        
        
        <span className={`badge bg-${onSale ? "success" : "danger"} p-2 position-absolute top-0 start-0`}>
          {onSale ? "On Sale" : "Off Sale"}
        </span>

        
        <span className="badge bg-danger p-2 position-absolute top-0 end-0">
          {count}
        </span>

        
        <h3 className="product-name">{pName}</h3>
        <h4 className="product-price">{price}</h4>
        <p className="product-desc">{desc}</p>

        
        <div className="d-flex justify-content-around m-3">
          <button onClick={() => deleteProduct(id)} className="btn btn-danger">
            Delete
          </button>
          <button className="btn btn-primary">
            Update
          </button>
        </div>

      </div>
    </div>
  )
}