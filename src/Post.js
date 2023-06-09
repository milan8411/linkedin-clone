// import { Avatar } from "@material-ui/core";
import { Avatar } from "@mui/material";
// import {
//   ChatOutlined,
//   SendOutlined,
//   ShareOutlined,
//   ThumbUpAltOutlined,
// } from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey" />
        <InputOption Icon={ChatOutlined} title="Comment" color="grey" />
        <InputOption Icon={ShareOutlined} title="Share" color="grey" />
        <InputOption Icon={SendOutlined} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
