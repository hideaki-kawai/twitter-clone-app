import { Avatar } from "@mui/material";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Repeat from "@mui/icons-material/Repeat";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import PublishOutlined from "@mui/icons-material/PublishOutlined";
import React, { forwardRef } from "react";
import "./Post.css";

export const Post = forwardRef((props, ref) => {
  const { displayName, username, varified, text, avatar, image } = props;
  return (
    <div className="post" ref={ref}>
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {displayName}
              <span className="post-headerSpecial">
                <VerifiedUser className="post-badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});
