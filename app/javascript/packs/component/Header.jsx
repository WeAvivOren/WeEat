
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="toolbar" >
                    <div className="icon"></div>
                    <h1> WeEat</h1>
                    <div className="marging">
                        {this.props.children}
                    </div>
                </div>
                <div className="padding"> </div>
            </MuiThemeProvider>
        );
    }

}

export default Header;