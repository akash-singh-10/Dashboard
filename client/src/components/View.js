import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

const View = () => {
	const navigate = useNavigate();
	const {id} = useParams("");
	const [getUserData, setUserData] = useState([]);

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
			setUserData(data)
			console.log("get data");
		}

	};

	useEffect(()=>{
		getData();
	},[]);

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
			navigate("/");
		}
	}

	return (
		<div className='container'>
			<h1 className='mt-5 mb-5' style={{ fontWeight: 350 }}>Welcome {getUserData.name}</h1>

			<Card sx={{ maxWidth: 700 }} variant="outlined">
				<CardContent>
					<div className='add_btn'>
						<NavLink to={`/update/${getUserData._id}`}><button className="btn btn-warning mx-2"><CreateIcon /></button></NavLink>
						<button className="btn btn-danger" onClick={()=>deleteUser(getUserData._id)}><DeleteIcon /></button>
					</div>
					<div className='left_view'>
						<img src='C:/projects/Student Dashboard/client/src/components/profile.png' style={{ width: 55 }} alt='profile' />
						<h3 className='mt-3'>Name: <span>{getUserData.name}</span></h3>
						<h3 className='mt-3'>Branch: <span>{getUserData.branch}</span></h3>
						<h3 className='mt-3'><CalendarMonthIcon /> age: <span>{getUserData.age}</span></h3>
						<h3 className='mt-3'><EmailIcon /> Email: <span>{getUserData.email}</span></h3>
						<h3 className='mt-3'><PhoneAndroidIcon /> Mobile: <span>{getUserData.mobile}</span></h3>
						<h3 className='mt-3'><LocationOnIcon /> Address: <span>{getUserData.address}</span></h3>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default View
