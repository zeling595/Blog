import Post from './Post'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        textTransform: 'capitalize',
        paddingTop: theme.spacing(2),
        color: "grey"
    }
}));

const PostList = ({ name, posts }) => {
    const classes = useStyles()
    return (
        <div>
            <h2>{name}'s Posts</h2>
            <h4 className={classes.text}>{posts.length} Posts</h4>
                {posts.map((post) => (
                    <Post key = {post.id} post = {post} />
                ))}
        </div>
    )
}

export default PostList
