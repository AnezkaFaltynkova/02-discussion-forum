import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "./App.css";
import posts from "./data/posts";
import AppPost from "./components/AddPost";
import AddPostModal from "./components/AddPostModal";
import PostThread from "./components/PostThread";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor (props) {
    super(props);

    this.handleAddPost = this.toggleAddPostModal.bind(this, true);
    this.handleAddPostCancel = this.toggleAddPostModal.bind(this, false);
    this.handleAddPostSubmit = this.handleAddPostSubmit.bind(this);

    this.state = {
      isAddingPost: false,
      posts: posts["posts"]
    };
  }

  toggleAddPostModal(isAddingPost) {
    this.setState({isAddingPost});
  }

  handleAddPostSubmit (post) {
    const posts = this.state.posts;
    const newPost = {...post, id: posts.length + 1, tags: []};

    // TODO add new post (newPost variable) to the list of posts
  }

  render() {
    const {posts} = this.state;
    // TODO show modal (AddPostModal) when user clicks on "Add Post"

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="React.js Forum"
            iconElementLeft={<span />}
            iconElementRight={<AppPost onTap={this.handleAddPost} />}
          />
          <PostThread posts={posts} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
