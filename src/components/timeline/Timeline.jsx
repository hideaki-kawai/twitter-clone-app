import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";

import db from "./../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import FlipMove from "react-flip-move";

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  /**
   * Firebaseからデータを取得する処理
   */
  useEffect(() => {
    // FireStoreからpostsのデータを取得してくる処理
    const postData = collection(db, "posts");
    // 取得してきた配列をtimestampの降順で並び変える処理
    const q = query(postData, orderBy("timestamp", "desc"));

    // リアルタイムでないデータ取得(Firebaseの書き方)
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline-header">
        <h2>ホーム</h2>
      </div>

      {/* Tweetbox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            varified={post.varified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};
