import { useNavigate } from "react-router-dom";
import UserProfile from './UserProfile.jsx';  // Import UserProfile component
import LogoutButton from './LogoutButton';  // Import LogoutButton component
import AddPostForm from './AddPostForm.jsx';
import axios from "axios";
import { useState, useEffect } from 'react';
import { POST_BASE_URL } from "./config";

export default function Blog() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${POST_BASE_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    alert('User logged out');
    navigate("/");
  };


  const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(`${POST_BASE_URL}/delete/${postId}`);
      alert(response.data);

      const updatedPosts = posts.filter(post => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      alert("Error: Failed to delete post.");
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const person = {
        firstName,
        lastName,
        email,
      };

      const response = await axios.post(`${POST_BASE_URL}/add`, {
        person,
        title,
        content,
      });

      alert(response.data);


      setTitle("");
      setContent("");

      // Refresh post list
      const responsePost = await axios.get(`${POST_BASE_URL}/posts`);
      setPosts(responsePost.data);
    } catch (error) {
      alert("Error: Failed to add post.");
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: "1000px", margin: '0 auto', padding: '20px' }}>
      {/* Header with Username, Email, and Logout Button */}
      {isLoggedIn && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div >
            <UserProfile firstName={firstName} lastName={lastName} email={email} />
            <LogoutButton onLogout={handleLogout} />
          </div>
        </div>
      )}
      <AddPostForm onAddPost={handleAddPost} title={title} setTitle={setTitle} content={content} setContent={setContent} />

      <h1 style={{ textAlign: "center" }}>Blog</h1>

      {/* Display Posts */}
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            display: "flex",
            flexDirection: "column",
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0px" }}>
            <h4 style={{ margin: "0px" }}>{post.person?.firstName} {post.person?.lastName}</h4>
          </div>

          <div>
            <h4 style={{ textAlign: "center", marginTop: "0px" }}>{post.person.email}</h4>
          </div>

          <h2 style={{ textAlign: "center" }}>{post.title}</h2>
          <p style={{ textAlign: "center" }}>{post.content}</p>



          {/*A delete button for user when user is owner*/}
          {user?.email === post.person?.email && (

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => handleDeletePost(post.id)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: "20%",
                  textAlign: 'center'

                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>)
      )}
    </div>
  );
}