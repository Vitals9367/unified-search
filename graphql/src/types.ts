import { GraphQlToElasticLanguageMap } from './constants';

export type ConnectionCursor = string;

export type ConnectionCursorObject = {
  offset: number;
};

export type PageInfo = {
  startCursor: ConnectionCursor | null;
  endCursor: ConnectionCursor | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type ConnectionArguments = {
  before?: ConnectionCursor | null;
  after?: ConnectionCursor | null;
  first?: number | null;
  last?: number | null;
};

export type SupportedConnectionArguments = Exclude<
  ConnectionArguments,
  'before' | 'last'
>;

export type ElasticSearchPagination = {
  from?: number;
  size?: number;
};

export type ElasticLanguage =
  typeof GraphQlToElasticLanguageMap[keyof typeof GraphQlToElasticLanguageMap];
