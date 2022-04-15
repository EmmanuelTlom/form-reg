import {IconButton, Typography} from '@mui/material';
import React, {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ReadMore = ({children, isReadMore, toggleReadMore}) => {
  const text = children;
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 70) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? '.....' : ''}
      </span>
    </p>
  );
};
const Content = () => {
  const items = [
    {
      title: 'Where are the sessions held and how long? ',
      content:
        'All sessions are conducted on Zoom or Google Meet over 30 to 45mins. Depending on your internet connection, sessions may be video-enabled to ensure full engagement with our success manager.',
    },
    {
      title: 'What do I come to a session with? ',
      content:
        'For a well engaging and productive session, we encourage that you have a rough draft of your company goals for 2022. We can also conduct a retrospective into last year’s goals if you’re up for it. ',
    },
    {
      title: 'Why’s it free, what’s the catch?',
      content:
        'There’s no catch. We don’t sell your data nor are the sessions going to be recorded. ',
    },
	{
		title: 'Can I reschedule a session? ',
		content:
		  'A no-show session is cancelled forever and rescheduling is frowned upon because our success managers prepare rigorously prior to each session. However, we understand that events that are beyond your control can happen. Kindly send an email to hi@peoplebeam.co, if you’d like to reschedule to a later date. ',
	  },
	 
  ];
  const FaqBox = ({faq}) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div>
        <div onClick={toggleReadMore} className="faq_main">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}>
            <Typography className="faq_title">{faq.title}</Typography>{' '}
            <IconButton
              onClick={toggleReadMore}
disableRipple
              style={{
                transform: isReadMore ? ' rotateX(180deg) ' : 'rotate(90deg)',
              }}>
              <img src="./Vector.png" alt="arrow" width="10px" />
            </IconButton>
          </div>
          <ReadMore isReadMore={isReadMore} toggleReadMore={toggleReadMore}>
            {faq.content}
          </ReadMore>
        </div>
      </div>
    );
  };
  return (
    <div
      className="section-width2"
      id="faq"
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '160px',
        flexDirection: 'column',
      }}>
      <Typography
        className="section2-detail3"
        style={{display: 'block', textAlign: 'center', paddingBottom: '40px'}}>
        Frequently asked questions?
      </Typography>
      {items.map((item) => (
        <FaqBox faq={item} key={item.title} />
      ))}
    </div>
  );
};
export default Content;

