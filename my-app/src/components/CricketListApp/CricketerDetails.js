import React from 'react';
import { Drawer, Container, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import {getPlayerDOB, getAge} from '../../utils/cricketApp'
import './CricketListAppStyles.css'

export const CricketerDetails = (props) => {
  const { isDrawerOpen, closeRecordsDrawer, drawerData } = props;

  const onCloseDrawer = () => {
        closeRecordsDrawer();
  }

  return (
    <React.Fragment>
      <Drawer 
      anchor="right"
      open={isDrawerOpen}
      onClose={onCloseDrawer}
      >
        <IconButton size="large" edge="start" color="red" onClick={onCloseDrawer} style={{width:'50px', left:'1rem'}}> 
          <Close/>
        </IconButton>
        <Container
          sx={{
            height: 'auto',
            width: '70rem',
            textalign: 'justify',
            margin: '1rem',
            fontWeight: '300',
            backgroundColor: '#white',
            color:'rgba(0, 0, 0, 0.87)',
            fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
          }}
        >
          <br/>
          <div>
            <hgroup>Player Name</hgroup>
            <p>{drawerData.name} <b style={{color:'#1a1c4b'}}>({drawerData.type})</b></p>
          </div>
          <div>
            <hgroup>Description</hgroup>
            <p>{drawerData.description}</p>
          </div>
          <div>
            <hgroup>Points</hgroup>
            <p>{drawerData.points}</p>
          </div>
          <div>
            <hgroup>Rank</hgroup>
            <p>{drawerData.rank}</p>
          </div>
          <div>
            <hgroup>Date Of Birth</hgroup>
            <p>{getPlayerDOB(drawerData.dob)}</p>
          </div>
          <div>
            <hgroup>Age</hgroup>
            <p>{getAge(drawerData.dob)}</p>
          </div>
        </Container>

        <Container
          sx={{
            height: 'auto',
            width: '70rem',
            textalign: 'justify',
            margin: '1rem',
            fontWeight: '600',
            backgroundColor: '#white',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
          }}
        >
        </Container>
      </Drawer>
    </React.Fragment>
  );
}
export default CricketerDetails;
