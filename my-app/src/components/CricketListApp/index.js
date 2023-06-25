import React, { useState, useEffect } from "react";
import { PageHeader } from "../MUI/controls/PageHeader";
import {CircularProgress } from "@mui/material";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../MUI/controls/useTable";
import { CricketerDetails } from "./CricketerDetails";
import Controls from "../MUI/controls/Controls";
import { Search } from "@material-ui/icons";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
// import { data } from "../../services/get-players";
import { getAge } from "../../utils/cricketApp";
import * as apiData from "../../utils/restUtil";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "50%",
  },
}));

const headCells = [
  { id: "name", label: "Player Name" },
  { id: "type", label: "Type" },
  { id: "points", label: "Points" },
  { id: "rank", label: "Rank" },
  { id: "age", label: "Age" },
];

export const CricketListApp = (props) => {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerData, setDrawerData] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var x = await apiData.getAllCricketersDetails();
      await delay(2000); // this is to delay the result to show spinner
      setRecords(x);
      setLoading(true);
    };
    dataFetch();
  }, []);

  const { TblContainer, TblHead } = useTable(records, headCells);

  const openRecordsDrawer = (value) => {
    setDrawerData(value);
    setIsDrawerOpen(true);
  };
  const closeRecordsDrawer = () => {
    setDrawerData(null);
    setIsDrawerOpen(false);
  };
  const renderName = (value) => {
    return <a onClick={() => openRecordsDrawer(value)}>{value.name}</a>;
  };

  return (
    <React.Fragment>
      <PageHeader
        title="Cricket Stats"
        subTitle="Know about your player"
        icon={<SportsCricketIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input // input search box
            label="Search Player"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {records
              .filter((value) => {
                if (searchTerm == "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{renderName(item)}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.points}</TableCell>
                  <TableCell>{item.rank}</TableCell>
                  <TableCell>{getAge(item.dob)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TblContainer>
        <div style={{ display: isLoading ? "none" : "block" }}>
          <center>
            <br />
            <br />
            <CircularProgress />
          </center>
        </div>
      </Paper>
      {isDrawerOpen && drawerData && (
        <CricketerDetails
          isDrawerOpen={isDrawerOpen}
          openRecordsDrawer={openRecordsDrawer}
          closeRecordsDrawer={closeRecordsDrawer}
          drawerData={drawerData}
        />
      )}
    </React.Fragment>
  );
};
