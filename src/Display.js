import React from "react"

const Display = (props) => {
    const {bookmark} = props

    const handleClick = (event) => {
        return(
            <a href={bookmark.url}></a>
        )
    }
    const loaded = () => (
        <div style={{textAlign: "center"}} onClick={handleClick}>
      {bookmark.map((bm)=>(
          <a href={bm.url} style={{textDecoration:"none", color: "black"}}>
            <div style={{border:"2px solid black"}}>
                <h1>{bm.title}</h1>
                <img style={{width:"50%", height: "10%"}} src={bm.img}/>
                {/* <a href={bm.url}><img style={{width:"50%", height: "10%"}} src={bm.img}/></a> */}
                <h3>{bm.url}</h3>
            </div>
          </a>
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