import type { FC } from "react";

import { NewsArticle } from "../../../types";
import "./Card.css";
import { Bookmark, Bookmarks } from "../../atoms";

type CardProps = {
  data: NewsArticle;
};

export const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="cardContainer">
      <div className="cardHeroContainer">
        <img src="https://picsum.photos/120/90"></img>
        <h2 className="cardTitle">{data.title}</h2>
      </div>
      <p>{data?.description || data.title}</p>
      <div className="cardMetadataContainer">
        <p className="cardDate">{data.publishedAt}</p>
        <Bookmark className="cardBookmark" color="#DEE2E6" />
      </div>
    </div>
  );
};
