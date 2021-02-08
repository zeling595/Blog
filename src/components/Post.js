import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        marginTop: "10px",
        padding: "10px 30px 10px 30px",
        maxWidth: "100%",
        borderRadius: "20px",
    },
    text: {
        textTransform: "capitalize",
        display:"inline-block",
        maxWidth: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontSize: "small",
        color: "grey",
        fontWeight: "bold"
    },
    title: {
        textTransform: "capitalize",
    }
  }));

const Post = ({ post }) => {
    const classes = useStyles()
    return (
        <div>
            <Card variant="outlined" className={classes.cardContainer}>
                <h4 className={classes.title}>{post.title}</h4>
                <p className={classes.text}>{post.body}</p>
            </Card>
        </div>
    )
}

export default Post
