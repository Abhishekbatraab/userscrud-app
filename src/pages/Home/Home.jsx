import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UserCard from '../../components/UserCard'
import './Home.css'
import { getUsers } from '../../slices/userSlice';
import { instance } from '../../api/globalAxios'

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
    const dispatch = useDispatch();

    useEffect(() => {
      // dispatch(getUsers);
      instance({
        method: 'get',
        url: '/users'
      })
      .then(response=>{
          console.log("Response in getusers", response);
      })
    })

    return(
        <React.Fragment>
             <div className={classes.root}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <Paper className={classes.paper}>
                          <Button variant="contained" color="primary">
                              Add User                                     
                          </Button>
                      </Paper>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <UserCard />
                    </Grid>
                    <Grid item xs={3}>
                      <UserCard />
                    </Grid>
                    <Grid item xs={3}>
                      <UserCard />
                    </Grid>
                    <Grid item xs={3}>
                      <UserCard />
                    </Grid>
                  </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Home