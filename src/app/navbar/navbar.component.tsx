import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
}
export const NavBar: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography color='inherit'>{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
