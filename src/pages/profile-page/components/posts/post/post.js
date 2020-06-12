import Link from "../../../../../components/common/login-link/link";
import Paper from "../../../../../components/common/paper/paper";
import React from "react";
import PropTypes from "prop-types";

const Post = ({ number, title, text, date }) => (
  <Paper className="post">
    <div className="post__header">
      <div className="post__number">{number}</div>
      <div>
        <div className="post__related-news">
          <Link classNames={{ text: "post__related-link" }} to="/">
            Shipspotters all over the world
          </Link>
          <Link
            className="post__related-link_2"
            classNames={{ text: "post__related-link" }}
            to={"/"}
          >
            Site related news, functions and modules{" "}
          </Link>
        </div>
        <Link classNames={{ text: "post__name" }} to={"/"}>
          {title}
        </Link>
      </div>
    </div>
    <div className="post__content">
      <div className="post__content-text">{text}</div>
      <Link
        to={"/"}
        classNames={{ root: "post__content-link", text: "post__name" }}
      >
        View all Text
      </Link>
    </div>
    <div className="post__footer">
      <div className="post__date">{date}</div>
      <div className="post__actions">
        <button className="post__action post__action_remove">Remove</button>
        <button className="post__action post__action_reply">Reply</button>
        <button className="post__action post__action_quote">Quote</button>
        <button className="post__action post__action_notify">Notify</button>
      </div>
    </div>
  </Paper>
);

Post.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
export default Post;
