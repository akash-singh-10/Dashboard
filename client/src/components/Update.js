import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate, Navigate } from "react-router-dom";
import { updateData } from "./context/ContextProvider";



const Update = () => {

	const {upData, setUpData} = useContext(updateData);

	const navigate = useNavigate();
	
	const [inputVal, setInput] = useState({
		name: "",
		branch: "",
		age: "",
		email: "",
		mobile: "",
		address: ""
	})

	const setData = (e) => {
		const { name, value } = e.target;
		setInput((preval) => {
			return ({
				...preval,
				[name]: value
			})
		})
	}

	const {id} = useParams("");
	
	const getData = async (e) => {

		const res = await fetch(`/getuser/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await res.json();
		console.log(data);

		if (res.status === 422 || !data) {
			console.log("error");
		} else {
			setInput(data)
			console.log("get data");
		}

	};

	useEffect(()=>{
		getData();
	},[]);

	const updateUser = async(e) => {
		e.preventDefault();

		const {name, branch, age, email, mobile, address} = inputVal;

		const res2 = await fetch(`/updateuser/${id}`,{
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({name, branch, age, email, mobile, address})
		});

		const data2 = await res2.json();

		if(res2.status === 422 || !data2) {
			alert("ERROR");
		} else {
			setUpData(data2);
			navigate("/");
		}
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
						<label for="exampleInputPassword1" className="form-label">Age</label>
						<input type="number" value={inputVal.age} onChange={setData} name="age" className="form-control" id="exampleInputPassword1" />
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

					<button type="submit" onClick={updateUser} className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>

		</div>
	);
};

export default Update
