import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sayGoodAfternoon, sayGoodEvening, sayGoodMorning } from './redux/wishMsg/actionCreator'

const WishMessage = () => {
    let msgStore = useSelector((state)=>{
        return state.mess
    })

    let dispatch = useDispatch();




  return (
    <Fragment>
      <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-header bg-primary text-center text-white'>
                <p className='h4'>Wish Message</p>
                </div>
                <div className='card-body'>
                <p className='h5'>{msgStore.message}</p>
                <button className='btn btn-sm btn-secondary' onClick={()=>dispatch(sayGoodMorning())}>say GM</button>
                <button className='btn btn-sm btn-danger' onClick={()=>dispatch(sayGoodAfternoon())}>say GA</button>
                <button className='btn btn-sm btn-primary' onClick={()=>dispatch(sayGoodEvening())}>say GE</button>
                </div>
            </div>
        </div>
      </div> 
      </div>
    </Fragment>
  )
}

export default WishMessage
