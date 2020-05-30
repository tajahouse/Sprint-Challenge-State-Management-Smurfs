import React, { useState } from "react";
import Axios from "axios";

export const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    console.log(smurf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3333/smurfs`, smurf)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response));

    setSmurf({ name: "", age: "", height: "" });
  };

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={smurf.name}
          name="name"
          onChange={handleChanges}
          placeholder="Smurf Name"
        />
        <input
          type="text"
          value={smurf.age}
          name="age"
          onChange={handleChanges}
          placeholder="Smurf Age"
        />
        <input
          type="text"
          value={smurf.height}
          name="height"
          onChange={handleChanges}
          placeholder="Smurf height"
        />
        <button type="submit">Make Smurf!</button>
      </form>
    </div>
  );
};

export default SmurfForm;