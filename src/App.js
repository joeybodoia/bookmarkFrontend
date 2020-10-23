import React from "react"
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import Display from "./Display"
import Form from "./Form"

function App() {
  // // variable to hold url
  const url = "http://localhost:3005"

  // state for bookmarks
  const [bookmark,setBookmark] = React.useState([])

  // create an empty bookmark
  const emptyBookmark = {
    title: "",
    url: ""
  }

  // API call
  const getBookmark = () =>{
    fetch(url+"/bookmark")
    .then(response => response.json())
    .then(data => {
      setBookmark(data)
    })
  }

  // // useEffect for intial fetch
  React.useEffect(()=>{
    getBookmark()
  })

  // handleCreate function
  const handleCreate = (newBookmark) => {
    fetch(url+"/bookmark", {
      method:"post",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newBookmark),
    }).then(reponse=>{
      getBookmark()
    })
  }

  return (
    <div className="App">
      <h1>Bookmark</h1>
      <Link to="/create">
        <button>Add new bookmark</button>
      </Link>
      <Switch>
      <Route exact path="/" render={(rp)=><Display {...rp} bookmark={bookmark}/>}/>
      <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" bookmark={emptyBookmark} handleSubmit={handleCreate} />
            )}
          />
      </Switch>
      
    </div>
  );
}

export default App;
