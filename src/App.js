import { Route, Routes } from "react-router-dom";
import AddPost from "./app/post/AddPost";
import PostList from "./app/post/PostList";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div  > 
      <Navbar/>
      <div className="w-1/2 mx-auto my-8">
        <Routes>
          <Route path="/" element={<PostList/>}/>
          <Route path="add-post" element={<AddPost/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
