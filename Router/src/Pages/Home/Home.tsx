import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import { Article, SortTypeOptions, SortTypeLanguage } from '../../asset/types';
import { Articles } from './Articles/articles';

import './home.scss';

export const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arts, setArts] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortTypeOptions>(
    SortTypeOptions.popularity,
  );
  const [sortByDateFrom, setSortByDateFrom] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [sortByDateTo, setSortByDateTo] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [sortByLanguage, setSortByLanguage] = useState<string>(
    SortTypeLanguage.english,
  );
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const doLink = () => {
    // 2dc2eddc38044aa78291cd76243ac73f
    // dbdf4685ec4c48b5a8e4c901f2db6319
    // ebeae2038d0048b6b1bf52de9be10b07
    // 94670730b44c4e62a57a7dbdcee91995
    // c3ee6a6db53c45f8a987673bf67d658c
    const API_KEY = 'c3ee6a6db53c45f8a987673bf67d658c';
    const url = 'https://newsapi.org/';
    const linkFetch =
      `${url}` +
      `v2/everything?q=${searchValue}` +
      `&sortBy=${sortBy}` +
      `&apiKey=${API_KEY}` +
      `&pageSize=${pageSize}` +
      `&page=${page}` +
      `&language=${sortByLanguage}` +
      `&from=${sortByDateFrom}` +
      `&to=${sortByDateTo}`;
    return linkFetch;
  };

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await fetch(doLink());
      const data = await response.json();
      setArts(data.articles || []);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (searchValue) {
      handleSubmit();
    }
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortByLanguage(value);
  };
  const validateDate = (value: string) => {
    const now = new Date().toISOString().slice(0, 10);
    return value > now ? now : value;
  };
  const chengeDateFrom = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const validValue = validateDate(value);
    setSortByDateFrom(validValue);
  };
  const chengeDateTo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const validValue = validateDate(value);
    setSortByDateTo(validValue);
  };

  return (
    <section className="search-bar">
      <form
        className="search-form"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="searchBar">
          <input
            id="search"
            className="input-search"
            type="text"
            name="searchBar"
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
          />
        </label>

        <button className="search-btn" type="submit">
          search
        </button>
      </form>

      {isLoading ? (
        <div className="loading">
          <h3 className="loading__text">Loading, please wait</h3>
          <div className="loading__field">
            <div className="loading__line" />
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="sort">
        <div className="sort__bysort">
          <p>Sort by:</p>
          <label htmlFor="sort-by">
            <span>{SortTypeOptions.popularity}</span>
            <input
              type="radio"
              name="sort"
              value={SortTypeOptions.popularity}
              checked={SortTypeOptions.popularity === sortBy}
              onChange={() => setSortBy(SortTypeOptions.popularity)}
            />
          </label>
          <label htmlFor="sort-publishedAt">
            <span>{SortTypeOptions.publishedAt}</span>
            <input
              type="radio"
              name="sort"
              value={SortTypeOptions.publishedAt}
              checked={SortTypeOptions.publishedAt === sortBy}
              onChange={() => setSortBy(SortTypeOptions.publishedAt)}
            />
          </label>
          <label htmlFor="sort-relevancy">
            <span>{SortTypeOptions.relevancy}</span>
            <input
              type="radio"
              name="sort"
              value={SortTypeOptions.relevancy}
              checked={SortTypeOptions.relevancy === sortBy}
              onChange={() => setSortBy(SortTypeOptions.relevancy)}
            />
          </label>
        </div>
        <div className="sort__bydate">
          <label htmlFor="sort-sortByDateFrom">
            <p>date from:</p>
            <input
              name="sortByDateFrom"
              type="date"
              value={sortByDateFrom}
              onChange={chengeDateFrom}
            />
          </label>
          <label htmlFor="sort-sortByDateTo">
            <p>date to:</p>
            <input
              name="sortByDateTo"
              type="date"
              value={sortByDateTo}
              onChange={chengeDateTo}
            />
          </label>
        </div>
        <div className="sort__bylanguage">
          <p>language:</p>
          <select onChange={changeLanguage}>
            <option value={SortTypeLanguage.english}>English</option>
            <option value={SortTypeLanguage.russian}>Russian</option>
            <option value={SortTypeLanguage.deutsch}>Deutsch</option>
            <option value={SortTypeLanguage.arabic}>Arabic</option>
            <option value={SortTypeLanguage.french}>French</option>
            <option value={SortTypeLanguage.chinese}>Chinese</option>
          </select>
        </div>
      </div>
      <Articles
        articles={arts}
        page={page}
        pageSize={pageSize}
        onChangePageSize={(pageSizeInput) => setPageSize(pageSizeInput)}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
