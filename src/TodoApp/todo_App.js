import { Box, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import '../TodoApp/todo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SMInput from '../config/components/input';

const TodoApp = () => {
    const [inpVal, setInpVal] = useState("")
    const [itm, setItm] = useState([])
    const [toggle, setToggle] = useState(true)
    const [edit, setEdit] = useState(null)

    let AddData = () => {
        console.log(inpVal)
        // setItm([inpVal]) ============ 1st Condition is true 

        if (!inpVal) {
            alert('Fill Data')
        } else if (inpVal && !toggle) {
            setItm(
                itm.map((element) => {
                    if (element.id === edit) {
                        return { ...element, inpVal }
                    }
                    return inpVal;
                })

            )
            setToggle(false)
            setInpVal('')
            setEdit(null)
        }
        else {
            setItm([...itm, inpVal])
            setInpVal("")

        }
    }
    let AllDel = () => {
        setItm([])
    }
    let DeleteData = (id) => {
        console.log(id)

        const Delete = itm.filter((element, index) => {
            return index !== id
        })
        setItm(Delete)


    }
    const EditData = (id) => {
        const Editdata = itm.find((element) => {
            return element == id
        })

        console.log(id)

        setToggle(false)
        setInpVal(Editdata)
        setEdit(id)
    }


    return (
        <>

            <h1>TODO APP</h1>
            <Box>
                <Box className='Dflex'>
                    <Box >
                        <SMInput value={inpVal} color="secondary" focused onChange={(e) => { setInpVal(e.target.value) }} type='text' label='Todo App' />
                    </Box>

                    {toggle ? <Box className='AddSPace'>
                        <AddIcon sx={{ color: green[500], fontSize: 30 }} onClick={() => AddData()} label='Add Todo' />
                    </Box> : <Box>
                        <AutoAwesomeIcon onClick={() => AddData()} sx={{ color: green[500] }} />
                    </Box>
                    }
                    <Box>
                        <DeleteIcon onClick={() => AllDel()} sx={{ color: pink[500] }} label='Delete All Data' />
                    </Box>


                </Box>
            </Box>
            <div className="itm">
                <ul>
                    {
                        itm.map((element, index) => {
                            return (
                                <li key={index}>{element} <DeleteIcon sx={{ color: pink[500] }} onClick={() => DeleteData(index)} /> <AutoAwesomeIcon sx={{ color: green[500] }} onClick={() => EditData(element, index)} /></li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default TodoApp