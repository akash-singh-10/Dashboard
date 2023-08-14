import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const View = () => {
  return (
    <div className='container'>
      <h1 className='mt-5 mb-5' style={{fontWeight:350}}>Welcome Akash Singh</h1>

      <Card sx={{ maxWidth: 700 }} variant="outlined">
        <CardContent>
          <div className='add_btn'>
            <button className="btn btn-warning mx-2"><CreateIcon /></button>
            <button className="btn btn-danger"><DeleteIcon /></button>
          </div>
          <div className='left_view'>
            <img src='C:/projects/Student Dashboard/client/src/components/profile.png' style={{width: 55}} alt='profile' />
            <h3 className='mt-3'>Name: <span>Akash Singh</span></h3>
            <h3 className='mt-3'>Branch: <span>Information Technology</span></h3>
            <h3 className='mt-3'><CalendarMonthIcon /> DoB: <span>21/05/2001</span></h3>
            <h3 className='mt-3'><EmailIcon /> Email: <span>akashsingh@gmail.com</span></h3>
            <h3 className='mt-3'><PhoneAndroidIcon /> Mobile: <span>1234567890</span></h3>
            <h3 className='mt-3'><LocationOnIcon /> Address: <span>Pune</span></h3>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default View
