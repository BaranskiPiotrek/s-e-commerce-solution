import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

interface Category {
  id: number;
  name: string;
}

interface SideMenuProps {
  categories: Category[];
  onItemClick: (category: Category) => void;
}

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

export const SideMenu: React.FC = ({ categories, onItemClick }: SideMenuProps) => {
    const classes = useStyles();
  
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {categories.map((category) => (
            <ListItem button key={category.id} onClick={() => onItemClick(category)}>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };