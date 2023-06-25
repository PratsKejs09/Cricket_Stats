import React, { useState } from "react";
import moment from 'moment';
import { PageHeader } from "../MUI/controls/PageHeader";
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
import Controls from "../MUI/controls/Controls";
import { Search } from "@material-ui/icons";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import { data } from "../../services/get-players";

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

  const { TblContainer, TblHead } = useTable(records, headCells);

  const getAge = (dob) => {
    const timestamp = dob;
    const playerDOB = moment(timestamp).format("L");
    const today = moment().format("MM/DD/YYYY");
    const playerObj = moment(playerDOB, "MM/DD/YYYY");
    const todayObj = moment(today, "MM/DD/YYYY");
    const age = todayObj.diff(playerObj, "years");
    return age;
  };
  const renderName = (value) => {
    return <a onClick={""}>{value.name}</a>;
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
            onChange={""}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {data.map((item) => (
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
      </Paper>
    </React.Fragment>
  );
};
