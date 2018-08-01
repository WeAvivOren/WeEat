import React from 'react';
import PropTypes from 'prop-types';
import Review from "./Review";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import StarRating from 'react-star-rating-component';


class AddReviewDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: '',
            name: 'name',
            comment: 'comment',
            rating: 0,
            restaurant: props.restaurant,
        };

    }


    onStarClick = (nextValue) => {
        this.setState({rating: nextValue});
    };

    handleClickOpen = () => {
        this.setState({open: true, restaurant: this.restaurant});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit(restaurant) {
        let url = `/restaurants/${restaurant.id}/reviews.json`;
        console.log("url  is = " + url);
        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    "review": {
                        "name": this.state.name,
                        "rating": this.state.rating,
                        "comment": this.state.comment
                    }
                }
            )

        }).finally(this.props.onClose());
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
            [comment]: event.target.comment,
        });
    };


    render() {
        const {classes} = this.props;
        const restaurant = this.props.restaurant;

        console.log("classes  is = " + classes);

        return <div>
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Add review"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={() => this.handleSubmit(restaurant)}>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            id="comment"
                            label="Comment"
                            value={this.state.comment}
                            onChange={this.handleChange('comment')}
                            margin="normal"
                        />
                        <div>
                                <span style={{
                                    color: 'rgba(0, 0, 0, 0.3)',
                                    position: "relative",
                                    bottom: "18px",
                                }}>Rating</span>
                            <StarRating className="star-component"
                                        name="rating"
                                        starCount={5}
                                        value={this.state.rating}
                                        starColor={"rgb(255, 235, 59)"}
                                        onStarClick={this.onStarClick}
                                        emptyStarColor="rgba(0, 0, 0, .54)"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        CANCEL
                    </Button>
                    <Button onClick={() => this.handleSubmit(restaurant, this.props.onClose)} color="primary"
                            autoFocus>
                        ADD
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;
    }
}

AddReviewDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AddReviewDialog;
