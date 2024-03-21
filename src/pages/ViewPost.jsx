import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../assets/Spinner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CommentCard from "../components/CommentCard";
import LoadingSpinner from "../assets/LoadingSpinner";
dayjs.extend(relativeTime);

export default function ViewPost() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();
  const [postData, setPostData] = useState({ text: "" });
  const [formError, setFormError] = useState(false);
  const [isliked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postLikes, setPostLikes] = useState(Math.ceil(Math.random() * 7));
  const [comments, setcomments] = useState([]);
  console.log(postData);

  function handleLiking() {
    if (isliked) {
      setPostLikes((prev) => (prev -= 1));
      setIsLiked(false);
    } else {
      setPostLikes((prev) => (prev += 1));
      setIsLiked(true);
    }
  }

  const commentsDivs = comments?.map((comment) => (
    <CommentCard
      key={comment._id}
      author={comment.author}
      authorImg={comment.authorImg}
      text={comment.text}
      time={comment.time}
    />
  ));

  function handleFormChange(e) {
    setFormError(false);
    setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handlePosting(e) {
    e.preventDefault();
    const commentInfo = {
      id,
      author: currentUser.displayName,
      authorImg: currentUser.image,
      text: postData.text,
      time: dayjs().toString(),
    };

    if (!postData.text) {
      setFormError(true);
    } else {
      setcomments((prev) => [...prev, commentInfo]);
      setPostData({ text: "" });
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(commentInfo)) {
        formData.append(key, value);
      }
      const response = await fetch("https://mind-wave.onrender.com/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      const postData = await response.json();
      if (response.status === 200) {
        console.log(postData);
        // window.location.reload();
      } else {
        setIsLoading(false);
      }
    }
  }
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://mind-wave.onrender.com/post");
      const posts = await response.json();
      const post = posts.find((post) => post._id === id);
      setCurrentPost(post);
      setcomments(post.comments);
    }
    getData();
  }, []);

  return !currentPost ? (
    <Spinner />
  ) : (
    <article className="px-6">
      <article className="flex justify-start gap-6 border-b border-light-200 py-6">
        <img
          className="w-12 h-12 md:w-10 md:h-10 rounded-full"
          src={currentPost.authorImg}
          alt=""
        />
        <section className="w-4/5 flex flex-col gap-4">
          <p className="font-bold">@{currentPost.username.replace(" ", "")}</p>
          <p>{currentPost.text}</p>
          <img
            className="w-full h-60 object-cover"
            src={currentPost.image}
            alt="post image"
          />
          <div className="flex items-center gap-16">
            <button className="flex items-center gap-2" onClick={handleLiking}>
              <img
                className="w-5 h-5"
                src={isliked ? "/liked.png" : "/like.png"}
                alt="like icon"
              />
              <p>{postLikes} Likes</p>
            </button>
            <button className="flex items-center gap-2">
              <img className="w-5 h-5" src="/comm.png" alt="like icon" />
              <p>{currentPost.comments.length} Comments</p>
            </button>
          </div>
          <p>{dayjs(currentPost.time).fromNow()}</p>
          <section className="w-full px-16 md:px-0">
            <p className="font-semibold text-xl py-6">Comments</p>
            <section className="py-8 px-4 flex gap-4 w-full border-b border-light-200">
              <img
                className="w-12 h-12 md:w-10 md:h-10 rounded-full object-cover"
                src={currentUser.image}
                alt=""
              />
              <form className="w-full">
                {formError && (
                  <p className="text-red-700">Please type something</p>
                )}
                <textarea
                  className="placeholder:text-xl text-light-200 bg-transparent py-2 w-full active:bg-transparent focus:bg-transparent outline-none"
                  placeholder="What's on your mind today?"
                  name="text"
                  value={postData.text}
                  onChange={(e) => handleFormChange(e)}
                />
                <button
                  className="bg-dark-100 px-6 py-1 text-dark-200 text-xl font-semibold rounded-xl"
                  onClick={handlePosting}
                >
                  {isLoading ? <LoadingSpinner /> : "Comment"}
                </button>
              </form>
            </section>
            <section>{commentsDivs}</section>
          </section>
        </section>
      </article>
    </article>
  );
}
