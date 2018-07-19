
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "@material-ui/core/es/AppBar/AppBar";


class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <AppBar
                    title="Title">
                    <h1> Hi </h1>
                </AppBar>
                    <img src="/images/food.jpg" />
                </div>
            </MuiThemeProvider>
        );
    }

}




export default Header;