import type { FC } from "react";

import { NewsArticle } from "../../../types";
import "./Card.css";

type CardProps = {
  data: NewsArticle;
};

export const Card: FC<CardProps> = ({ data }) => {
  return <div className="cardContainer">{JSON.stringify(data, null, 3)}</div>;
};
