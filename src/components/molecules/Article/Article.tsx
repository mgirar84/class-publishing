import { type FC } from "react";

import { IonRouterLink } from "@ionic/react";

import { NewsArticle } from "../../../types";
import "./Article.css";

type ArticleProps = {
  data: NewsArticle;
};

export const Article: FC<ArticleProps> = ({ data }) => {
  const dateString = new Date(data.pubDate).toDateString();
  return (
    <div className="articleContainer">
      <img className="articleImage" src={data?.image_url}></img>
      <div className="articleBody">
        <h1 className="articleTitle">{data.title}</h1>
        <p className="articleDate">{dateString}</p>
        <p className="articleDescription">{data.description}</p>
        <IonRouterLink className="articleLink" href={data.link}>
          Read the full article...
        </IonRouterLink>
      </div>
    </div>
  );
};
