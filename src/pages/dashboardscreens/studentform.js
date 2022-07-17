import React from 'react'
import { DeleteData,  getData } from '../../config/firebase/firebasemethods'
import { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from './edit';
import { Typography } from '@mui/material';
import SMButton from '../../config/components/button';
import { useNavigate } from "react-router-dom";


const Liist = () => {
  const [renderr, setRenderr] = useState([])
  const [deletee, setDelete] = useState([])
  const [edit, setEdit] = useState(false)


  const getAllData = () => {
    getData('student').then((res) => {
      setRenderr(res)
      console.log(renderr)
    })
  }

  const DeleteMethod = (uid) => {
    console.log(uid)
    DeleteData("student/", uid).then(() => {
      console.log('delete successfully')
      console.log(uid)
    }).catch((err) => {
      console.log(err)
    })
  };


  useEffect(() => {
    getAllData()
  }, [])

  const Navigate = useNavigate();
  const navigatetoform = () => {
    Navigate('/form')
  }
  const EditNavigate = (receve) => {

    Navigate('/edit', { state: receve })
  }

  return (

    <>
      <Typography sx={{ fontWeight: 600, fontFamily: "monospace" }} variant='h2'>STUDENT DATA FORM </Typography>
      <Table className='maintable' variant="dark">
        <thead className='theadd'>
          <tr p={2} >
            <th>ID</th>
            <th>NAME</th>
            <th>FATHER NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>AGE</th>
            <th>CNIC</th>
            <th>CONTACT</th>
            <th>SECTION</th>
          </tr>
        </thead>

        {renderr.map((e) => {
          return (
            <>

              <tbody>
                <tr className='marginlist'  >
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.fathername}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.age}</td>
                  <td>{e.cnic}</td>
                  <td>{e.contact}</td>
                  <td>{e.section}</td>

                  <td className='cursor'><EditIcon onClick={() => EditNavigate(e)} /></td>


                  <td className='cursor' onClick={() => DeleteMethod(e.uid)} ><DeleteIcon /></td>

                </tr>
              </tbody>
            </>
          )
        })}
        <SMButton onClick={navigatetoform} label='Add Student' S />
      </Table>

    </>)
}

export default Liist;