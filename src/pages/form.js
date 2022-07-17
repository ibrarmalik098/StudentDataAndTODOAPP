import React, { useState } from 'react'
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SMInput from '../config/components/input';
import InputLabel from '@mui/material/InputLabel';
import SMButton from '../config/components/button';
import { sendData, sendingData } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';
const Form = () => {

    const [allData, setallData] = useState([])

    const Navigate = useNavigate();


    const myFunc = () => {
        if (!allData.email) {
            return alert("email is required")
        }
        if (!allData.password || allData.password.length < 6) {
            return alert("password must required and password atleast seven characters ")
        }
        sendData(allData, 'student').then(() => {
            console.log("data transfer")
        }).catch((err) => {
            console.log(err)
        })

        console.log(allData)

        Navigate('/list')



    }


    return (
        <Box>
            <Typography mt={2} align='center' variant="h3">Form</Typography>

            <Grid mt={5} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, name: e.target.value }) }} label="Student Name" required={true} disabled={false} type="text" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, fathername: e.target.value }) }} label="Father Name" required={true} disabled={false} type="text" />
                    </>
                    
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, cnic: e.target.value }) }} label="CNIC" required={true} disabled={false} type="number" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, contact: e.target.value }) }} label="Contact" required={true} disabled={false} type="number" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, age: e.target.value }) }} label="Age" required={true} disabled={false} type="number" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        {/* <InputLabel htmlFor="input-with-icon-adornment">
                             Birth        </InputLabel> */}
                        <SMInput  onChange={(e) => { setallData({ ...allData, dateOfBirth: e.target.value }) }} label="Date of Birth"  required={true} disabled={false}  />
                             </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, class: e.target.value }) }} label="Class" required={true} disabled={false} type="text" />
                    </>
                    
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, section: e.target.value }) }} label="Section" required={true} disabled={false} type="text" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, id: e.target.value }) }} label="Id" required={true} disabled={false} type="number" />
                    </>
                    
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, email: e.target.value }) }} label="Email" required={true} disabled={false} type="email" />
                    </>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <>
                        <SMInput onChange={(e) => { setallData({ ...allData, password: e.target.value }) }} label="Password" required={true} disabled={false} type="password" />
                    </>
                    
                </Grid>
                <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                    <SMButton type='submit' onClick={myFunc} label="Submit" />
                </Grid>



            </Grid>


        </Box>
    )
}

export default Form;