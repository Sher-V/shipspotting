import React from "react";
import Typography from "../../../../components/common/typography/typography";
import "./posts.sass";
import Post from "./post/post";
import Pagination from "./pagination/pagination";

const Posts = () => (
  <div className="posts">
    <Typography className="posts__title" firstText={"My"} secondText={"posts"} />
    <Post
      number={"1"}
      title={"This is the simple text for website redesign"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... voluptate"
      }
      date={"on: February 21, 2020,  03:56:27 pm copy"}
    />
    <Post
      number={"2"}
      title={"Re: Can we talk about deletions like grown ups?"}
      text={
        "Agree with all of the above coments. Here I thought I was the only member who had deleted postings.\n" +
        "It hurts at the time especially when you notice inferior postings going through,"
      }
      date={"on: February 21, 2020,  03:56:27 pm copy"}
    />
    <Pagination count={"11 797"} currentPage={"2"}/>
  </div>
);

export default Posts;
