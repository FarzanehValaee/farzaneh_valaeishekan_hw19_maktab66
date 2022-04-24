import Header from './pages1/Header';
import {Routes, Route} from "react-router-dom";
import Posts from './pages1/Posts';
import Country from './pages1/Country';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Header />}>
       <Route path="/" element={< Posts/>}/>
       <Route path="/posts" element={< Posts/>}/>
       <Route path='posts/:name' element={<Country />} />
          </Route>
     </Routes>
    </div>
  );
}

export default App;
