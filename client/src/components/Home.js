import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";

const Home = () => {

	const [getUserData, setUserData] = useState([]);
	console.log(getUserData);

	const getData = async (e) => {

		const res = await fetch("/getdata", {
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
			setUserData(data)
			console.log("get data");
		}

	};

	useEffect(() => {
		getData();
	}, []);

	const deleteUser = async(id) => {
		const res2 = await fetch(`/deleteuser/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		});

		const deleteData = await res2.json();

		if (res2.status === 422 || !deleteData) {
			console.log("error");
		} else {
			alert("USER DELETED");
			console.log("USER DELETED");
			getData();
		}
	}

	return (
		<div className="mt-5">
			<div className="container">

				<div className="add_btn mt-3 mb-4">
					<NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
				</div>

				<table class="table">
					<thead>
						<tr className="table-dark">
							<th scope="col">Id</th>
							<th scope="col">Name</th>
							<th scope="col">Branch</th>
							<th scope="col">Email</th>
							<th scope="col">Number</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{
							getUserData.map((element, id) => {
								return (
									<>
										<tr>
											<th scope="row">{id + 1}</th>
											<td>{element.name}</td>
											<td>{element.branch}</td>
											<td>{element.email}</td>
											<td>{element.mobile}</td>
											<td className="d-flex justify-content-between">
												<NavLink to={`/view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
												<NavLink to={`/update/${element._id}`}><button className="btn btn-warning"><CreateIcon /></button></NavLink>
												<button className="btn btn-danger" onClick={()=>deleteUser(element._id)}><DeleteIcon /></button>
											</td>
										</tr>
									</>
								)
							})
						}

					</tbody>
				</table>

			</div>
		</div>
	);
};

export default Home;
