import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Divider, Paper } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: theme.spacing(3),

    },
    footer: {
        height: 50,
        padding: theme.spacing(2, 0),
    },
    fixedFooter: {
        position: 'sticky',
        top: '100%'
    }



}));

export default function FooterNav() {
    const classes = useStyles();
    return (
        < div className={classes.fixedFooter}>
            <footer >
                <Divider />
                <Paper elevation={0} className={classes.footer}>
                    <Typography variant="body2" align="center">
                        Made with  <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                            <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji>
                            &nbsp;by Eisha Khan
                    </Typography>
                </Paper>
            </footer>
        </div>

    );
}