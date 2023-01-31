import { useEffect } from "react";
import { postServices, userServices } from "./services/";

function App() {

  useEffect(()=>{
    postServices.getPosts().then(res=>console.log(res))
    postServices.getPostDetails(2).then(res=> console.log(res))
    postServices.newPost({
      userId:3,
      title:'test',
      body:'test content'
    })
    postServices.newPostJSON({
      userId:3,
      title:'test',
      body:'test content'
    })
    userServices.getUsers().then(res=>console.log(res))
  })
  

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
