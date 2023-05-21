
//import './App.css';
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Error from "./pages/Error";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog/:slug" element={<Blogpost/>}></Route> 
          {/* <Route path="*" element={<Error/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
