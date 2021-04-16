import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UserCard from '../../components/UserCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
}));

const Home = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
             <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Button variant="contained" color="primary">
                               Add User                                     
                            </Button>
                        </Paper>
                    </Grid>
                    <UserCard />
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Home