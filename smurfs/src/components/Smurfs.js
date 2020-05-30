import React from 'react';
import { connect } from "react-redux";
import { getSmurf } from "../actions/index"
import { useDispatch } from "react-redux";
import Smurf from "../components/Smurf"
import SmurfForm from "../components/SmurfForm"
const Smurfs = (props) =>{
    const dispatch= useDispatch();
        const fetchSmurf = e =>{
            e.preventDefault();
            dispatch(getSmurf());
        }
        console.log(props.smurf)

        return (
             
            <div className="smurfs">

    <SmurfForm/>
    <Smurf smurf={props.smurf} key={Date.now()}/>
    <button className="fetch_button" onClick={ fetchSmurf }>Characters</button>

   
            </div>
        )
    }
    const mapStateToProps = state =>
    {
    console.log("State", " ", state.smurf)
        return(
    
    {
        smurf:state.smurf,
        error:state.error
    }
            )
    
}
;

export default connect(mapStateToProps, { getSmurf }) ( Smurfs );

