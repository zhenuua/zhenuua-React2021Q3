import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Article } from '../../asset/types';

import './details.scss';

interface DeteilsProps {
  title: string;
}

export const Deteils: FC = () => {
  const { title } = useParams<DeteilsProps>();
  const [dataItems, setDataItem] = useState<Article[]>([]);

  const url = 'https://newsapi.org/';
  const API_KEY = 'c3ee6a6db53c45f8a987673bf67d658c';
  const getData = async () => {
    const response = await fetch(
      `${url}v2/everything?qInTitle=${title}&apiKey=${API_KEY}`,
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((resp) => setDataItem(resp.articles));
  }, []);

  return (
    <section className="page-details">
      {dataItems.map((item) => (
        <div key={item.title}>
          <h3 className="page-details__item">{item.title}</h3>
          <p className="page-details__item">author: {item.author}</p>
          <p className="page-details__item">{item.content}</p>
          <p className="page-details__item">description: {item.description}</p>
          <p className="page-details__item">published at: {item.publishedAt}</p>
          <p className="page-details__item">url: {item.url}</p>
          <p className="page-details__item">content: {item.content}</p>
          <div className="page-details__item">
            <img
              className="page-details__img"
              src={item.urlToImage}
              alt="search element"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
