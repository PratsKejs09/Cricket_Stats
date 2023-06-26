import { Close } from "@mui/icons-material";
import { Drawer, Container, IconButton, Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import "../../CricketListApp/CricketListAppStyles.css";

export const FilterDrawer = (props) => {
  const { isFilterDrawerOpen, closeFilterDrawer, types, getSelectedTypes, setIsFilterActive  } = props;
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const dataFetch = () => {
    };
    dataFetch();
  }, []);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const onCloseDrawer = () => {
    closeFilterDrawer();
  }
  const onApplyFilter = () => {
    setIsFilterActive(true);
    getSelectedTypes(checked)
    closeFilterDrawer();
  }

  return(
    <React.Fragment>
      <Drawer 
      anchor="right"
      open={isFilterDrawerOpen}
      onClose={onCloseDrawer}
      >
        <IconButton size="large" edge="start" color="red" onClick={onCloseDrawer} style={{width:'50px', left:'1rem'}}> 
          <Close/>
        </IconButton>
        <Container
          sx={{
            height: 'auto',
            width: '20rem',
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
            <hgroup style={{color:'#1a1c4b',backgroundColor: '#3c44b126', padding: '10px'}}>Filter by Type</hgroup>
            <br/>
            <div className="checkbox">
              <div className="checkList">
                <div className="list-container">
                  {types.map((item, index) => (
                    <div key={index}>
                      <br/>
                      <input value={item} type="checkbox"  onChange={handleCheck} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <br/><br/>
              <div>
                <Button variant="contained" onClick={onApplyFilter} style={{width:'100px', left:'0rem', height:'40px', backgroundColor: "#3c44b1"}}>
                    Apply
                </Button>
              </div>
            </div>
            <br/>
            <br/>
          </div>
        </Container>
      </Drawer>
    </React.Fragment>
  )
}