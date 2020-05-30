import React from 'react';


const Smurf = ({smurf}) =>{
    
    const removeSmurf = () =>{
        smurf.filter(s => smurf.id !== s.id)
	}
    return (
        <div>
            {smurf.map(char => {console.log(char)
                return <div className="smurf_wrapper" key={char.id}>
                    <h3>{char.name}</h3>
                    <h4>{char.height}</h4>
                    <h4>{char.age}</h4>
                    <button onClick={ removeSmurf }>Delete</button>
                </div>
            })}
 
        </div>
    )
}

export default Smurf;