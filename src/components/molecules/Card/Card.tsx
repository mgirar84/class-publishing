import type { FC } from "react";

import { NewsArticle } from "../../../types";
import "./Card.css";
import { Bookmark } from "../../atoms";
import { IonRouterLink } from "@ionic/react";

type CardProps = {
  index: number;
  data: NewsArticle;
};

export const Card: FC<CardProps> = ({ data, index }) => {
  const publishedDate = new Date(data.pubDate).toDateString();
  const { title, description, image_url, article_id } = data;
  return (
    <IonRouterLink routerLink={`article/${article_id}`} className="cardContainer">
      <div className="cardHeroContainer">
        {image_url && <img className="cardImage" src={image_url} />}
        <h2 className="cardTitle">{title}</h2>
      </div>
      <p className="cardDescription">{description}</p>
      <div className="cardMetadataContainer">
        <p className="cardDate">{publishedDate}</p>
        <Bookmark className="cardBookmark" color="#DEE2E6" />
      </div>
    </IonRouterLink>
  );
};
