import Search from "@mui/icons-material/Search";
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>
      <div className="widgets-widgetContainer">
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1545394277383131140"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Engineer"
          options={{ height: 100 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/Shin_Engineer"}
          options={{ text: "#React.js勉強中", via: "Shin_Engineer" }}
        />
      </div>
    </div>
  );
};
