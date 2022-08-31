import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./../../firebase";

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const onChangeTweetMessage = (e) => {
    setTweetMessage(e.target.value);
  };
  const onChangeTweetImage = (e) => {
    setTweetImage(e.target.value);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    // Firebaseのデータベースにデータを追加する
    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "hidechannu",
      varified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox-input">
          <Avatar />
          <input
            type="text"
            placeholder="いまどうしてる？"
            value={tweetMessage}
            onChange={onChangeTweetMessage}
          />
        </div>
        <input
          className="tweetBox-imageInput"
          type="text"
          placeholder="画像のURLを入力してください"
          value={tweetImage}
          onChange={onChangeTweetImage}
        />
        <Button
          className="tweetBox-tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};
