import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt=""
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">My Title is:</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Its my discruption !</p>
    </div>
  );
}
