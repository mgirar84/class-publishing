import type { FC } from "react";

import { NewsArticle } from "../../../types";
import "./Card.css";
import { Bookmark } from "../../atoms";
import { IonRouterLink } from "@ionic/react";
import { IconButton } from "../IconButton";

type CardProps = {
  data: NewsArticle;
  onBookmarkPress: () => void;
};

export const Card: FC<CardProps> = ({ data, onBookmarkPress }) => {
  const publishedDate = new Date(data.pubDate).toDateString();
  const { title, description, image_url, article_id, isBookmarked } = data;
  return (
    <div className="cardContainer">
      <IonRouterLink className="cardLink" routerLink={`article/${article_id}`}>
        <div className="cardHeroContainer">
          {image_url && <img className="cardImage" src={image_url} />}
          <h2 className="cardTitle">{title}</h2>
        </div>
      </IonRouterLink>
      <p className="cardDescription">{description}</p>
      <div className="cardMetadataContainer">
        <p className="cardDate">{publishedDate}</p>
        <IconButton
          iconName="bookmark"
          onClick={onBookmarkPress}
          iconProps={{ className: "cardBookmark", color: "#DEE2E6" }}
        />
      </div>
    </div>
  );
};
