import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ReviewCreate = (props) => {
    const classes = useStyles();
    const { id } = props;
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/review/${id}`)
            .then(res => {
                console.log(res.data)
                setUser(res.data.user);
                setReview(res.data.results);
                // setLoading(false);
            })
            .catch(err => console.log(err.message))
    }, []);

    // if(loading){
    //     return(
    //         <p>Loading....</p>
    //     )
    // }
    return (

        <div>
            <Button color="primary" variant="outlined" onClick={e => navigate(`/homepage`)}>Home</Button>
            <h2> Details on your review for this user</h2>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography color="textSecondary">
                    Reviewer's Name:
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                    {review.name}
                    </Typography>
                    <Typography color="textSecondary">
                    User Rating:
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                    {review.rating}
                    </Typography>
                    <Typography color="textSecondary">
                    Review:
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                    {review.review}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReviewCreate;