
import './App.css';
import Bayo from './component/Bayo'
import Verify from './component/Verify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div className="App">
<BrowserRouter>
<Routes>
      <Route  path="/" element={<Bayo />} />
      <Route path="verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
</div>
 
  )
}

export default App;
