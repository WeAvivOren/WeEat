
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import {Row, Col} from 'react-bootstrap';
import GridList from "@material-ui/core/es/GridList";
import GridListTile from "@material-ui/core/es/GridListTile/GridListTile";


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

                <div className="wrapper">
                    <div className="home-hero">
                        <div className="feature">
                            <h3>We like balloons</h3>
                            <p>You can find all kinds of balloon related things here.</p>
                        </div>
                        <div className="special">
                            <h3>Special Shapes</h3>
                            <p>Why are some of them so scary looking?</p>
                        </div>
                        <div className="amazing">
                            <h3>10 things you discover when taking a balloon ride.</h3>
                            <p>Number 8 will AMAZE you.</p>
                        </div>
                        <div className="news">
                            <h3>Angry people at balloon fiestas</h3>
                            <p>Hot air balloons. A bit weather sensitive. </p>
                        </div>
                        <div className="cta"><p>Sign up for more information about balloons. </p>
                            <a className="spam-button" href="/spam-machine">Sign me up!</a>
                        </div>
                        <div className="photos">
                            <h3>Angry people at balloon fiestas</h3>
                            <p>Hot air balloons. A bit weather sensitive. </p>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}




export default Header;