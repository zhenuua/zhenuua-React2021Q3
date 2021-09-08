import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../asset/types';
import { MAX_PAGE_SIZE } from '../../../asset/constants';

interface ArticleProps {
  articles: Article[];
  page: number;
  pageSize: number;
  onChangePage: (pageFromInput: number) => void;
  onChangePageSize: (pageSizeInput: number) => void;
  handleSubmit: () => void;
}

export const Articles: FC<ArticleProps> = ({
  articles,
  page,
  pageSize,
  onChangePage,
  onChangePageSize,
  handleSubmit,
}) => {
  const [arrayPages, setArrayPages] = useState<(number | string)[]>([1]);

  const makeArrayPages = () => {
    const arr: number[] = [1];
    for (let i = 2; i <= MAX_PAGE_SIZE / pageSize; i += 1) {
      const newPage = i;
      arr.push(newPage);
    }
    return arr;
  };

  useEffect(() => {
    setArrayPages(makeArrayPages());
  }, [pageSize]);

  const handleChangePage = (e: MouseEvent<HTMLButtonElement>) => {
    const but = e.target as HTMLButtonElement;
    if (but.value) {
      onChangePage(Number(but.value));
    } else {
      onChangePage(1);
    }
  };

  const handleChangeSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangePageSize(Number(value));
  };

  return (
    <div className="result-search">
      <div className="pages">
        <div className="pages__current">
          <p>
            Current page: <span>{page}</span>
          </p>
          <p>
            Results per page: <span>{pageSize}</span>
          </p>
        </div>
        <div className="pages__numbers">
          <p className="pages__numbers__title">Page:</p>
          <div className="pages__numbers__buttons">
            {arrayPages.map((item) => (
              <button
                type="button"
                key={item}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  handleChangePage(e);
                  handleSubmit();
                }}
                className={
                  Number(page) === item
                    ? 'item-page-active item-page'
                    : 'item-page'
                }
                value={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="pages__select">
          <p>Number of results per page:</p>
          <select value={pageSize} onChange={handleChangeSize}>
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {articles.length ? (
        <table className="result-search-table">
          <thead>
            <tr>
              <td>title</td>
              <td>auther</td>
              <td>published at</td>
              <td>Image</td>
              <td>Details</td>
            </tr>
          </thead>
          <tbody>
            {articles.map(({ author, title, urlToImage, publishedAt }) => (
              <tr key={title + urlToImage + publishedAt}>
                <td>{title}</td>
                <td>{author}</td>
                <td>{publishedAt}</td>
                <td>
                  <img className="autherphoto" src={urlToImage} alt={title} />
                </td>
                <td>
                  <Link to={`/details/${title.replace('%', '')}`}>
                    <p>More details</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-results">No results!</p>
      )}
    </div>
  );
};
