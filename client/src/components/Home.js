import React, { useEffect, useState, useContext } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { addData, deleteData, updateData } from "./context/ContextProvider";

const Home = () => {
	const { userData, setUData } = useContext(addData);
	const { upData, setUpData } = useContext(updateData);
	const { dltData, setDltData } = useContext(deleteData);
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

	const deleteUser = async (id) => {
		const res2 = await fetch(`/deleteuser/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		});

		const deletedData = await res2.json();

		if (res2.status === 422 || !deletedData) {
			console.log("error");
		} else {
			console.log("USER DELETED");
			setDltData(deletedData)
			getData();
		}
	}

	return (
		<>
			{
				userData ?
					<>
						<div class="alert alert-success alert-dismissible fade show" role="alert">
							<strong>{userData.name}</strong> Added Successfully.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					</> : ""
			}

			{
				upData ?
					<>
						<div class="alert alert-success alert-dismissible fade show" role="alert">
							<strong>{upData.name}</strong> Updated Successfully.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					</> : ""
			}

			{
				dltData ?
					<>
						<div class="alert alert-danger alert-dismissible fade show" role="alert">
							<strong>{dltData.name}</strong> Deleted Successfully.
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					</> : ""
			}

			<div className="mt-3">
				<div className="container">

					<div className="add_btn mt-2 mb-4">
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
													<button className="btn btn-danger" onClick={() => deleteUser(element._id)}><DeleteIcon /></button>
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
		</>
	);
};

export default Home;
