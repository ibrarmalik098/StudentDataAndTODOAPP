import { LocalShippingTwoTone } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import SMButton from '../config/components/button'
import SMInput from '../config/components/input'
import { sendData } from '../config/firebase/firebasemethods'



const QuizApp = () => {


    const [quiz, setQuiz] = useState([])

    const QuizFuc = () => {
        sendData(quiz, `${'Quiz/'}`).then(() => {
            //local storage setdata //    
            localStorage.setItem('QuizData',
                JSON.stringify(quiz));
            //local storage setdata //    

            console.log("data transfer")
        }).catch((err) => {
            console.log(err)
        })


    }
    //local storage getdata //    
    useEffect(() => {
        const getdatafun = JSON.parse(localStorage.getItem('QuizData') || '[]')
        console.log(getdatafun)
    }, [])
    //local storage getdata //    
    return (
        <>
        <></>

            <Box className="backcolor" >
                <Typography variant='h3'>Quiz App</Typography>

                <Box sx={{ margin: 4 }}>
*
                    <Box>
                        <SMInput onChange={(e) => { setQuiz({ ...quiz, Questions: e.target.value }) }} label="Enter Yoir  Quistion" required />
                    </Box>

                    <Box sx={{ margin: 4 }}>
                        <SMInput onChange={(e) => { setQuiz({ ...quiz, correctanswer: e.target.value }) }} label="Correct Answer" />
                        <Box sx={{ margin: 4 }}>

                          <SMInput onChange={(e) => { setQuiz({ ...quiz, Option1: e.target.value }) }} label="Option 1" />
                            <SMInput onChange={(e) => { setQuiz({ ...quiz, Option2: e.target.value }) }} label="Option 2" />
                            <SMInput onChange={(e) => { setQuiz({ ...quiz, Option3: e.target.value }) }} label="Option 3" />
                        </Box>
                        <Box>
                            <SMButton onClick={() => QuizFuc()} label="Save Question" />
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default QuizApp