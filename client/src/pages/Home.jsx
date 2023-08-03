import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button><Link to={`/post/${post.id}`} className="read-more" style={{
                  textDecoration: 'none',
                  color: 'teal',
                  width: 'max-content',
                  padding: '10px 20px',
                  //border: 'none',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  border: '0px solid teal',
                }}>
                Read More
              </Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
