import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const Update = () => {

    const [inputVal, setInput] = useState({
        name: "",
        branch: "",
        dob: "",
        email: "",
        mobile: "",
        address: ""
    })
    
    const setData = (e) => {
        const {name, value} = e.target;
        setInput((preval) => {
            return ({
                ...preval,
                [name]:value
        })
        })
    }
    
    return (
    <div className="mt-5 container">

    <NavLink to="/"><b>HOME</b></NavLink>

      <form className="mt-5">
        <div className="row">

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" value={inputVal.name} onChange={setData} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Branch</label>
            <input type="text" value={inputVal.branch} onChange={setData} name="branch" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Date of Birth</label>
            <input type="date" value={inputVal.dob} onChange={setData} name="dob" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Email</label>
            <input type="email" value={inputVal.email} onChange={setData} name="email" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Mobile</label>
            <input type="number" value={inputVal.mobile} onChange={setData} name="mobile" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Address</label>
            <input type="text" value={inputVal.address} onChange={setData} name="address" className="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default Update
