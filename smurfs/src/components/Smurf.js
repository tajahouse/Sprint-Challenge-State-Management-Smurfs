import React from 'react';


const Smurf = ({smurf}) =>{
    return (
        <div>
            {smurf.map(char => {console.log(char)
                return <div className="smurf_wrapper" id={char.id}>
                    <h3>{char.name}</h3>
                    <h4>{char.height}</h4>
                    <h4>{char.age}</h4>
                </div>
            })}
 
        </div>
    )
}

export default Smurf;