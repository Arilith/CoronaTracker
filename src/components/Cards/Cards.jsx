import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

import CountUp from 'react-countup'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed) {
        return "Loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Infected</Typography>
                        <Typography variant="h5" gutterttom>
                            <CountUp start={0 }end={confirmed.value} duration={2.5} separator="." 
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Recovered</Typography>
                        <Typography variant="h5" gutterttom>REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Deaths</Typography>
                        <Typography variant="h5" gutterttom>REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;