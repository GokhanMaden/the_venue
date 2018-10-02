import React from "react";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  
  return(
    <Drawer
      anchor="right" 
      open={props.open} 
      onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => {}}>Start Events In</ListItem>
        <ListItem button onClick={() => {}}>Venue NFO</ListItem>
        <ListItem button onClick={() => {}}>Highlights</ListItem>
        <ListItem button onClick={() => {}}>Pricing</ListItem>
        <ListItem button onClick={() => {}}>Location</ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;