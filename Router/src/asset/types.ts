export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export enum SortTypeOptions {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export enum SortTypeLanguage {
  english = 'en',
  russian = 'ru',
  deutsch = 'de',
  arabic = 'ar',
  french = 'fr',
  chinese = 'zh',
}
