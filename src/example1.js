import { useEffect, useState } from "react";

function App() {

  const [name,setName] = useState('ebubekir')
  const [file,setFile] = useState(false)

  const headers = new Headers()
  /* headers.append('content-type', 'application/json') */
  headers.append('Authorization', 'Token 32532532532643')

  const formData = new FormData()
  formData.append('userId', 1)
  formData.append('title', 'example 1')
  formData.append('body', 'content 1')

  const addPost = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
     /*  body:JSON.stringify(data), */
      body:formData,
      headers
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=> console.log(err))
  }

  useEffect(()=>{
    addPost({
      userId:1,
      title:"example 1",
      body:"content 1"
    })
  },[])

  const submitHandle = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('name', name)
      formData.append('file', file)
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:formData
      })
  }

  return (
    <div className="App">
      <form onSubmit={submitHandle}>
          <input type="text" value={name} onChange={e=> setName(e.target.value)} />
          <input type="file" onChange={e=> setFile(e.target.files[0])} />
          <button disabled={!name || !file} type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default App;
