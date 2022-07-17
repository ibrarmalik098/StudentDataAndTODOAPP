import React, { useState } from 'react'
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import SMInput from '../../config/components/input';
import SMButton from '../../config/components/button';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Editfac } from '../../config/firebase/firebasemethods';

const Edit = () => {
    const Navigate = useNavigate();
    const Location = useLocation();
    console.log(Location.state)



    const [allRecive, setRecive] = useState({
        name: Location.state.name,
        fathername: Location.state.fathername,
        cnic: Location.state.cnic,
        contact: Location.state.contact,
        age: Location.state.age,
        dateOfBirth: Location.state.dateOfBirth,
        class: Location.state.class,
        section: Location.state.section,
        id: Location.state.id,
        email: Location.state.email,
        password: Location.state.password,

        uid: Location.state.uid,



    })

    const NewEdit = () => {
        Editfac(allRecive, 'student/', allRecive.uid).then(() => {
            Navigate('/list')
            console.log("data update")
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(allRecive.uid)
    return (
        <>

            <Box>
                <Typography mt={2} variant="h5">Edit Form</Typography>

                <Grid container spacing={2} >
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.name} onChange={(e) => { setRecive({ ...allRecive, name: e.target.value }) }} label="Student Name" required={true} disabled={false} type="text" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.fathername} onChange={(e) => { setRecive({ ...allRecive, fathername: e.target.value }) }} label="Father Name" required={true} disabled={false} type="text" />

                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.cnic} onChange={(e) => { setRecive({ ...allRecive, cnic: e.target.value }) }} label="CNIC" required={true} disabled={false} type="number" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.contact} onChange={(e) => { setRecive({ ...allRecive, contact: e.target.value }) }} label="Contact" required={true} disabled={false} type="number" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.age} onChange={(e) => { setRecive({ ...allRecive, age: e.target.value }) }} label="Age" required={true} disabled={false} type="number" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>


                        <SMInput value={allRecive.dateOfBirth} onChange={(e) => { setRecive({ ...allRecive, dateOfBirth: e.target.value }) }} required={true} disabled={false} type="date" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.class} onChange={(e) => { setRecive({ ...allRecive, class: e.target.value }) }} label="Class" required={true} disabled={false} type="text" />

                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.section} onChange={(e) => { setRecive({ ...allRecive, section: e.target.value }) }} label="Section" required={true} disabled={false} type="text" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.id} onChange={(e) => { setRecive({ ...allRecive, id: e.target.value }) }} label="Id" required={true} disabled={false} type="number" />

                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.email} onChange={(e) => { setRecive({ ...allRecive, email: e.target.value }) }} label="Email" required={true} disabled={false} type="email" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>

                        <SMInput value={allRecive.password} onChange={(e) => { setRecive({ ...allRecive, password: e.target.value }) }} label="Password" required={true} disabled={false} type="password" />

                    </Grid>
                    <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                        <SMButton onClick={NewEdit} label="Update Value" />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Edit