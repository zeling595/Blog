import { Grid, Paper } from '@material-ui/core'
import categoryIcon from '../category.png'
import phoneIcon from '../icons8-phone-96.png'
import shopIcon from '../icon-24-shop.svg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        maxWidth: "500",
    },
    gridText: {
        padding: "10px",
        fontFamily: "Gill Sans",
        textTransform: "capitalize"
    },
    icon: {
        height: "25px",
        width: "25px",
        padding: "5px"
    }
  }));

const UserInfo = ({ user }) => {
    const classes = useStyles()

    const phoneStr = user.phone.split(" ")[0]

    const companyStr = user.company.bs.replaceAll(" ", "· ")

    const addressDic = user.address
    const addressStr = addressDic.street + ", " + addressDic.suite + ", " + addressDic.city + ", " +addressDic.zipcode.split("-")[0]

    return (
        <div>
            <h2>{user.name}</h2>
            <Paper elevation={0} className={classes.paper}>
                <Grid container>
                    <Grid item xs={1}>
                        <img className={classes.icon} src={phoneIcon} alt="phone icon" />
                    </Grid>
                    <Grid item className={classes.gridText} xs={11}>
                        {phoneStr}
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.icon} src={categoryIcon} alt="category icon" />
                    </Grid>
                    <Grid item className={classes.gridText} xs={11}>
                        {companyStr}
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.icon} src={shopIcon} alt="shop icon" />    
                    </Grid>
                    <Grid item className={classes.gridText} xs={11}>
                        {addressStr}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default UserInfo
