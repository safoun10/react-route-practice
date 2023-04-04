import { Outlet } from 'react-router-dom';
import './App.css'
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {

  return (
    <div className='root'>
      <Header></Header>
      {/* <Body></Body> */}
      <Outlet></Outlet>
    </div>
  )
}

export default App;