import { Grid, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Portfolio = () => {
    return (
        <Box>
            <Box>
            </Box>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Grid item xs={12} md={6} sm={12}   >
                        <Box>
                            <img width={500} src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}  >
                        <Box>
                            <img width={500} src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' />
                        </Box>
                    </Grid>

                </Grid>
            </Box >
        </Box>
    )
}

export default Portfolio