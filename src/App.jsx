import Landing from './Landing'
import Acordeon from './Acordeon'
import NaviBar from './NaviBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (<>
  
  
    <BrowserRouter>
   
    <NaviBar/>
    <div className="container">
<Routes>
  
<Route path="/" element={<Landing/>}></Route>
<Route path="/acordeon" element={<Acordeon/>}></Route>


</Routes>
</div>
</BrowserRouter>
  </>);
}
export default App
