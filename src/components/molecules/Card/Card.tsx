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
  // todo: fix this
  const publishedDate = new Date(data.publishedAt).toDateString();
  return (
    <IonRouterLink routerLink={`article/${index}`} className="cardContainer">
      <div className="cardHeroContainer">
        <img src={`https://picsum.photos/120/90?random=${index}`}></img>
        <h2 className="cardTitle">{data.title}</h2>
      </div>
      <p>{data?.description || data.title}</p>
      <div className="cardMetadataContainer">
        <p className="cardDate">{publishedDate}</p>
        <Bookmark className="cardBookmark" color="#DEE2E6" />
      </div>
    </IonRouterLink>
  );
};
