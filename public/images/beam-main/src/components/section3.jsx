import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Section3() {
    return (
        <div className='section-width'>

            <Box className='section3-main' style={{ backgroundColor: '#F6F6F8' }}>
                <Grid container spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img src="./image4.png" alt="" className='image2-details' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className='section2-detail3'>
                            Ready to save your seat?
                        </Typography>
                        <Typography className="section3-detail2" style={{ paddingTop: '16px', width: '100%' }}>
                            It’s free 😃. There are no barriers to entry. This is an avenue for you to ask anything, get advice and be coached by experts. Plus, it's personal.
                        </Typography>

                        <Box style={{ paddingTop: '24px' }}>
                            <Button variant="contained" href="https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank" className='button-head'>
                                Meet with a success champion
                            </Button>
                            <Box style={{ display: 'flex', paddingTop: '40px' }}>

                                <Typography className='section3-detail4'>
                                    “Very easy to use, and has helped me alot with
                                    clarity about my goals 😌”
                                </Typography>
                            </Box>
                            <Box style={{ display: 'flex', paddingTop: '16px' }}>

                                <Typography className='section3-detail' style={{ color: '#1E1E2F' }}>
                                Liyi, Glade
                                </Typography>
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <div className='parent-head2'>
                <Box className='main-head2'>
                    <Typography className="first-heading2">
                        All sessions are private
                        and confidential
                    </Typography>

                    <Typography className='detail-head2'>
                        We value privacy, we will not display testimonials or case-studies
                        on our website, or use any of your information
                        other than for the purpose of the workshop.
                    </Typography>
                    <Box style={{ textAlign: "center" }}>
                        <Button variant="contained" href="https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank" className='button-head'>
                            Get a 1:1 session
                        </Button>
                    </Box>
                </Box>


            </div>
        </div>
    )
}

export default Section3
