import React from "react"
import Form from "./Form"
import {Route, Link} from "react-router-dom"

const Display = (props) => {
    const {bookmark} = props

    const url = "http://localhost:3005"



    const handleDelete = (id) =>{
        fetch(url+"/bookmark/" + id, {
            method: "DELETE",
        })
    }

    // const handleUpdate = (id) =>{
    //     fetch(url+"/bookmark/" +id, {
    //         method: "put",

    //     })
    // }
    const loaded = () => (
        <div style={{textAlign: "center"}}>
      {bookmark.map((bm)=>(
        //   <a href={bm.url} style={{textDecoration:"none", color: "black"}}>
            <div style={{border:"2px solid black"}}>
                <h1>{bm.title}</h1>
                {/* <img style={{width:"50%", height: "10%"}} src={bm.img}/> */}
                <a href={bm.url}><img style={{width:"50%", height: "10%"}} src={bm.img}/></a>
                <h3>{bm.url}</h3>
                <button onClick={()=>{
                    props.selectBookmark(bm)
                    props.history.push("/edit")
                }}>Edit Bookmark</button>
                <button onClick={()=> handleDelete(bm._id)}>Delete Bookmark</button>
                {/* <Link to="/create">
                    <button>Update Bookmark</button>
                </Link>
                <Route
                    exact
                    path="/create"
                    render={(rp) => (
                    <Form label="update" />
                    )}
                /> */}

            </div>
        //   </a>
          
      ))}
    </div>
        
    )

    return(
    <div>
        {/* <h1>Display</h1> */}
        {loaded()}
    </div>
    )
}

export default Display