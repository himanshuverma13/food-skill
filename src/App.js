// import logo from './logo.svg';
import './App.css';
import RightSidebar from './Components/Common/SideNavbar/rightSideNavbar';
import UserLogin from './Components/Common/UserLogin/userlogin';

function App() {
  return (
    <>
    <div className='background-img'>
    <UserLogin/>
    <RightSidebar/>
      
    </div>
    </>
  );
}

export default App;
