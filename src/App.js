import './App.css';
import Home from '../src/Components/Pages/Home/home'
import Order from './Components/Pages/Order/order';
import PreviousOrder from './Components/Pages/PreviousOrder/previousOrder';

function App() {
  return (
    <>
    <div className='background-img'>
      {/* <Home/> */}
      {/* <Order/> */}
      <PreviousOrder/>
    </div>
    </>
  );
}

export default App;
