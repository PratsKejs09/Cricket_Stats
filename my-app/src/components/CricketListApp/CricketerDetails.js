import React from "react";
import { Drawer, Container, IconButton } from "@mui/material";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import Box from '@mui/material/Box';
import { Close } from "@mui/icons-material";
import { getPlayerDOB, getAge } from "../../utils/cricketApp";
import useTable from "../MUI/controls/useTable";
import "./CricketListAppStyles.css";

const headCells = [
  { id: 'name', label: 'Similar Players' },
  { id: 'points', label: 'Points'},
  { id: 'rank', label: 'Rank'},
]

export const CricketerDetails = (props) => {
  const { isDrawerOpen, closeRecordsDrawer, drawerData, similarPlayers } =
    props;

  const { TblContainer, TblHead } = useTable(similarPlayers, headCells);
  
  const renderSimilarPlayers = (similarPlayers) => {
    if (similarPlayers.length == 0) {
      return (
        <Box component="span" sx={{
          visibility: 'visible',
          my: 2,
          p: 1,
          backgroundColor: '#white',
          color:'#1a1c4b',
          fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
          fontSize: '1rem',
          fontWeight: '700',
          marginLeft: '2rem',
          marginRight: '1rem',
        }}>
          "Uh oh! There are no similar players"
        </Box>
      )
    }
    else {
      return (
        <TblContainer>
          <TblHead />
          <TableBody>
            {similarPlayers.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.points}</TableCell>
                <TableCell>{item.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </TblContainer>
      )
    }
  }
  const onCloseDrawer = () => {
    closeRecordsDrawer();
  };

  return (
    <React.Fragment>
      <Drawer anchor="right" open={isDrawerOpen} onClose={onCloseDrawer}>
        <IconButton
          size="large"
          edge="start"
          color="red"
          onClick={onCloseDrawer}
          style={{ width: "50px", left: "1rem" }}
        >
          <Close />
        </IconButton>
        <Container
          sx={{
            height: "auto",
            width: "70rem",
            textalign: "justify",
            margin: "1rem",
            fontWeight: "300",
            backgroundColor: "#white",
            color: "rgba(0, 0, 0, 0.87)",
            fontfamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        >
          <br />
          <div>
            <hgroup>Player Name</hgroup>
            <p>
              {drawerData.name}{" "}
              <b style={{ color: "#1a1c4b" }}>({drawerData.type})</b>
            </p>
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
            height: "auto",
            width: "70rem",
            textalign: "justify",
            margin: "1rem",
            fontWeight: "600",
            backgroundColor: "#white",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        ></Container>
        {renderSimilarPlayers(similarPlayers)}
      </Drawer>
    </React.Fragment>
  );
};
export default CricketerDetails;
