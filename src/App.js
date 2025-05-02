import React, { Fragment} from 'react'

import './App.css'
import ProductItem from './components/ProductItem';
import { Provider } from 'react-redux';
import { proStore } from './components/redux123/productStore';
import ParentComp from './components/ParentComp';
// import WishMessage from './components/WishMessage';
// import { Provider } from 'react-redux';
// import { store } from './components/redux/store';




const App = () => {
 

  return (
    <Fragment>
    <nav className='navbar navbar-dark bg-danger navbar-expand-sm text-white'>
      <p className='h4'>React Redux</p>
    </nav>
{/* <Provider store={store}>

<WishMessage/>
</Provider> */}
<Provider store={proStore}>
      <ProductItem/>
</Provider>


<ParentComp/>
    </Fragment>
  );
}

export default App
