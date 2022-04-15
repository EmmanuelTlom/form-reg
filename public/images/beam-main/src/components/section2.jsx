import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Section2() {
    return (
        <div className='section-width'>
            <Box className='section2-main'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography className="section2-detail1">
                      We’re here to help unleash the full potential of your business.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className="section2-detail2">
                       We’re hosting personal 1:1 sessions to help you to build clear company and team goals, understand how to manage and track them.
                    </Typography>
                </Grid>
            </Grid>
            </Box>
            <Box className='section2-main2'>
            <Grid container spacing={3} style={{display:'flex',alignItems:'center'}}>
                <Grid item xs={12} md={6}>
                   <img src="./image2.png" alt="" className='image2-details' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography  className='section2-detail3'>
                    In the Sessions
                        </Typography>
                    <Typography className="section2-detail2" style={{paddingTop:'16px'}}>
                    We’ll analyse your current situation, then recommend a bespoke set of goal-building tools to help you get clear on what to aim for, and how to improve as a team.
                    </Typography>
                    <Box style={{paddingTop:'24px'}}>
                        <Box  style={{display:'flex',paddingBottom:'16px'}}>
                            <CheckIcon style={{paddingRight:'14px',color:'#585ADF'}} />
                            <Typography className='section2-detail4'>
                            Get actionable feedback on how you can use frameworks
 like OKRs, or Focus areas & KPIs.
                            </Typography>
                        </Box>
                        <Box   style={{display:'flex',paddingBottom:'16px'}}>
                        <CheckIcon style={{paddingRight:'14px',color:'#585ADF'}} />
                            <Typography className='section2-detail4'>
                            Get the know-how to setup actionable success metrics.
                            </Typography>
                        </Box>
                       
                    </Box>
                    <Button variant='outlined' href="https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank" className='section-button2'>
                    Try a session
                    </Button>
                </Grid>
            </Grid>
            </Box>
            <Box className='section2-main2'>
            <Grid container spacing={3} style={{display:'flex',alignItems:'center',paddingTop:'160px'}}>
                
                <Grid item xs={12} md={6}>
                    <Typography  className='section2-detail3'>
                    Who’s this for? 
                        </Typography>
                    <Typography className="section2-detail2" style={{paddingTop:'16px'}}>
                   If you have ever said, “We need better incentives to motivate people”, or if you’re currently struggling with strategies for people management and goal setting, then this session is for you.
                    </Typography>
                    <Box style={{paddingTop:'24px'}}>
                        <Box  style={{display:'flex',paddingBottom:'16px'}}>
                            <CheckIcon style={{paddingRight:'14px',color:'#585ADF'}} />
                            <Typography className='section2-detail4'>
                            Team leads, Business unit Managers & COOs
                            </Typography>
                        </Box>
                        <Box   style={{display:'flex',paddingBottom:'16px'}}>
                        <CheckIcon style={{paddingRight:'14px',color:'#585ADF'}} />
                            <Typography className='section2-detail4'>
                           People Managers & HR Leaders
                            </Typography>
                        </Box>
                        <Box   style={{display:'flex',paddingBottom:'24px'}}>
                        <CheckIcon style={{paddingRight:'14px',color:'#585ADF'}} />
                            <Typography className='section2-detail4'>
                            Founders & CEOs
                            </Typography>
                        </Box>
                    </Box>
                    <Button variant='outlined' href=" https://calendly.com/beam-demo/1-1-strategic-planning-session-w-success-champion" target="_blank" className='section-button2'>
                    Get a 1:1 session
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                   <img src="./image3.png" alt="" className='image2-details2'/>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}

export default Section2
