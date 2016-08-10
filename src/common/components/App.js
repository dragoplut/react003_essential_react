import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';


//const muiTheme = getMuiTheme({
//    palette: {
//      primary1Color: green500,
//      primary2Color: green700,
//      primary3Color: green100
//    }
//  }, {
//    avatar: {
//      borderColor: null
//    }
//});
//muiTheme={muiTheme}


export default ({children}) => {
  return (
    <MuiThemeProvider id="container">
      {children}
    </MuiThemeProvider>
  );
}
