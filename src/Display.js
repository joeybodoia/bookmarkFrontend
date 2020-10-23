import React from "react"

const Display = (props) => {
    const {bookmark} = props
    const loaded = () => (
        <div style={{textAlign: "center"}}>
      {bookmark.map((bm)=>(
        <article>
            <hr/>
          <h1>{bm.title}</h1>
          <img style={{width:"50%", height: "10%"}} src={bm.img}/>
          <h3>{bm.url}</h3>
          <hr/>
        </article>
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