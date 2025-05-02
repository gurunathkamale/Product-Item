import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDecrease, onIncrease } from './redux123/productItem/actionCreator'

const ProductItem = () => {
    let itemStore = useSelector((state)=>{
        return state.product
    })
    // let { productItem} = itemStore


    let dispatch = useDispatch()
  return (
    <Fragment>
      <div className='container mt-3'>
        <div className='row'>
            <div className='col'>
               <table className='table table-striped table-yellow table-hover text-center'>
                 <thead className='bg-primary text-white'>
                    <tr>
                        <th>SNO</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td>{itemStore.id}</td>
                        <td>
                            <img src={itemStore.image} alt='' width='60px' height='60px'/>
                        </td>
                        <td>{itemStore.name}</td>
                        <td>{itemStore.price}</td>
                        <td>
                            <i className='fa fa-minus-circle mx-1' onClick={()=>dispatch(onDecrease())}></i>
                            {itemStore.qty}
                            <i className='fa fa-plus-circle mx-1'  onClick={()=>dispatch(onIncrease())}></i>
                        </td>
                        <td>{(itemStore.price)*(itemStore.qty)}</td>
                    </tr>
                 </tbody>
               </table>
            </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(itemStore)}</pre> */}
    </Fragment>
  )
}

export default ProductItem
