import { Button, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import React from 'react'

function Section1() {
    return (
        <div className='parent-head'>
            <Box className='main-head'>
                <img src="./male1.png" alt="" className='male'/>
                <img src="./female1.png" alt="" className='female' />
                <img src="./Hope.png" alt="" className="hope" width="43px" />
            <Typography className="first-heading">
            Launch your company goals in 2022!
            </Typography>
            {/* <Typography className="first-heading"> </Typography> */}
            <Typography className='detail-head'>
            If your company haven’t set goals yet or if your last ones feel vague, now is the right time to get started.
            </Typography>
            <Box style={{textAlign:"center"}}>
            <Button variant="contained" href=" https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank" className='button-head'>
            Get a 1:1 session
            </Button>
            </Box>
            <Box>
            <img src="./Hope1.png" alt="" width="58px" className="icon_female" />
            <img src="./Lightning.png" alt=""  width="50px" className="icon_female" style={{float:'right',display:"flex"}}/>
            </Box>
            </Box>

          
        </div>
    )
}

export default Section1
