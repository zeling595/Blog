import blogImg from './headerImage.jpg'
import UserInfo from './components/UserInfo'
import PostList from './components/PostList'
import UserMenu from './components/UserMenu'
import { Container, Box } from '@material-ui/core';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FadeLoader from "react-spinners/FadeLoader";

const useStyles = makeStyles((theme) => ({
  headerImage: {
    background: `url(${blogImg})`,
    height: "200px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
  },
  userContainer: {
    paddingTop: theme.spacing(3),
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column"
  }
}));

function App() {
  const classes = useStyles()
  const loaderColor = "#F8D5A8"

  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(() => {
    setLoading(true)
    const getUser = async () => {
      const userFromServer = await fetchUser()
      if (userFromServer) {
        setUser(userFromServer)
        setLoading(false)
      } else {
        console.log("error")
      }
    }
    getUser()
  }, [userId])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [userId])

  useEffect(() => {
    const getUserList = async () => {
      const userListFromServer = await fetchUserList()
      setUserList(userListFromServer)
    }
    getUserList()
  }, [])

  // Fetch user 
  const fetchUser = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await res.json()

    return data
  }

  // Fetch posts
  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data = await res.json()

    return data
  }

  // Fetch list of users
  const fetchUserList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    return data
  }

  const updateUserId = updatedUserId => {
    setUserId(updatedUserId)
  }

  return (
    <div>
      {loading ?
      <div className={classes.loaderContainer}>
        <FadeLoader color={loaderColor} loading={loading} size={150} />
        <h4 style={{color: "grey"}}>We are fetching your content! Please wait :)</h4>
      </div>
        :  
      <div>
        <Box className={classes.headerImage}>
          <UserMenu className={classes.menu} getNewUserId={updateUserId} userList = {userList} />
        </Box>
        <Container maxWidth="lg" className={classes.userContainer}>
          {user ? <UserInfo user = {user} /> : 'loading...'}
        </Container>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          {user ? <PostList name = {user.name} posts = {posts} /> : 'loading...'}
        </Container>
       </div>
    }
    </div>
  );
} 

export default App;
