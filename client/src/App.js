import React from 'react'
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom'
import {Register} from "./Components/Register";
import {Login} from "./Components/Login";
import { ToastContainer } from 'react-toastify';

function App() {
  // const [dataaa, setData] = useState(null);
  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(data => setData(data.message))
  // }, []);
  
  return (
    <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
            <Route path='/' element={<h1 className='text-center'>Home</h1>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

        </Routes>
    </div>
  );
}

export default App;
