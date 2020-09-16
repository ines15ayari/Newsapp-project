import React from 'react'

function Search({articles}) {
    return (
    
           <div style={{textAlign:'center'}}>
            <input style={{textAlign:'center',width:'89%',height:'50px',marginTop:'8%'}}type="text" placeholder="search an article..." 
            onChange={(e)=> this.setState({articles:e.target.value})}
            />
        </div>
    )
}

export default Search
