import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RateReview from '@material-ui/icons/RateReview';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Review from "./Review";
import AddReviewDialog from "./AddReviewDialog";
import StarRating from 'react-star-rating-component';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "#F7CFD3",
    },
});


class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            reviews :[],
            text: '',
            restaurant: props.restaurant,
            love : false,
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleExpandClick = event => {
        this.setState({ expanded: !this.state.expanded });
    };

    componentDidMount() {
        this.getReviews();
    }


    getReviews() {
        let url = `/restaurants/${this.props.restaurant.id}/reviews.json`;
        console.log("url  is = " + url);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => this.setState({reviews: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleLoveClicked = () => {
        const love = this.state.love;
        this.setState({ love: !love });
    }



    render() {
        const { classes } = this.props;
        console.log("classes  is = " + classes);

        const reviews = ( //loads the cuisines list into map, then for each item
            this.state.reviews.map((review) => {
                return <Review  key={review.id} review = {review} />
            })
        );

        const colorLove = this.state.love ? "secondary" : "default";

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                               {this.props.restaurant.name[0]}
                            </Avatar>
                        }

                        action={
                            <div>
                                <StarRating className="small-star-component"
                                            name="rating"
                                            starCount={5}
                                            value={this.props.restaurant.rating}
                                            starColor={"#F7CFD3"}
                                            emptyStarColor="rgba(0, 0, 0, .54)"
                                />

                            </div>
                        }

                        title={this.props.restaurant.name}
                        subheader={this.props.restaurant.address}
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.restaurant.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with
                            your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites" onClick={this.handleLoveClicked} color={colorLove}>
                                <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="Rate" onClick={this.handleClickOpen}>
                            <RateReview/>
                        </IconButton>
                        {this.props.restaurant.accepts_10bis ?  <img src={'/images/10bis-logo.png'} width="30" height="15" style={{marginLeft : 10}} /> : null}
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Reviews:
                            </Typography>
                            {reviews}
                        </CardContent>
                    </Collapse>
                </Card>

                <AddReviewDialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    close = {this.handleClose}
                    restaurant = {this.props.restaurant}
                >
                </AddReviewDialog>

            </div>
        );
    }
}

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);
