// App.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faStar } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import SmallCircle from './components/SmallCircle';
import DatePicker from './components/DatePicker';
import SmallSquare from './components/SmallSquare';
import BigSquare from './components/BigSquare';
import LongSquare from './components/LongSquare';
import MarkerShape from './components/MarkerShape';

function Report() {
  return (
    <div
      style={{
        transform: 'scale(0.5)', // Scales down to 80%
        transformOrigin: 'top left', // Anchor point for scaling
        width: '100%', // Ensure the container maintains layout
        height: '100%',
      }}
    >
    <BigSquare>
      {/* Stage Display as part of BigSquare */}
      <SmallSquare className="Stage display" text="Stage X"/>
      
      <div style={{
        position: 'absolute',             
        top: '100px',                   
        left: '120px',                 
        fontSize: '45px',
        fontFamily: 'Calibri',
        }}> 
          Aug 28th 2024
          <span style={{ padding: '0 30px' }}>-</span>
          Sep 28th 2024
      </div>

      <FontAwesomeIcon icon={faPen} style={{position: 'absolute',  top:'115px', left:'750px', fontSize: '35px'}}/>

      <div style={{
        position: 'absolute',             
        top: '180px',                   
        left: '90px',                 
        fontSize: '60px',
        fontFamily: 'Calibri',
        color: "#FF90BC",
      }}> Contributors
      </div>

      <SmallCircle
        className="Participant display"
        text="6"
        backgroundColor="#FF90BC"
        top= '200px'               
        left= '450px'               
      />

      <SmallCircle
        className="Participant 1"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '50px'               
      />
      <FontAwesomeIcon icon={faStar} style={{position: 'absolute',  top:'334px', left:'57px', color: '#FF90BC', fontSize: '35px'}}/>

      <SmallCircle
        className="Participant 2"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '150px'               
      />

      <SmallCircle
        className="Participant 3"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '250px'               
      />

      <SmallCircle
        className="Participant 4"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '350px'               
      />

      <SmallCircle
        className="Participant 5"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '450px'               
      />

      <SmallCircle
        className="Participant 6"
        text=""
        backgroundColor="#81BFB7"
        top= '300px'               
        left= '550px'               
      />

      <SmallCircle
        className="Add participant"
        text="+"
        backgroundColor="#FF90BC"
        top= '300px'               
        left= '650px'               
      />

      <LongSquare className="Progress bar"/>

      <div style={{
          position: 'absolute',             
          top: '480px',                   
          left: '65px',                 
          fontSize: '40px',
          fontFamily: 'Calibri',
        }}> 0
      </div>

      <div style={{
          position: 'absolute',             
          top: '480px',                   
          left: '765px',                 
          fontSize: '40px',
          fontFamily: 'Calibri',
        }}> 8
      </div>
      
      <MarkerShape 
        className="User 1 progess"
        left= '100px'
      />

      <MarkerShape 
        className="User 2 progess"
        left= '250px'
      />

      <MarkerShape 
        className="User 3 progess"
        left= '270px'
      />

      <MarkerShape 
        className="User 4 progess"
        left= '350px'
      />

      <MarkerShape 
        className="User 5 progess"
        left= '400px'
      />

      <MarkerShape 
        className="User 6 progess"
        left= '410px'
      />

    </BigSquare>
    </div>
  );
} 

export default Report;
