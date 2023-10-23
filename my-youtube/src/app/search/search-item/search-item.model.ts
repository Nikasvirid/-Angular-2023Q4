export interface IItem {
  kind: string;
  etag: string;
  snippet: ISnippet;
  statistics: IStatistics;
  id?: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [name: string]: IThumbnail
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultLanguage?: ILanguage;
  defaultAudioLanguage: ILanguage;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ILocalized {
  title: string;
  description: string;
}

export enum ILanguage {
  en = 'en-US',
  ru = 'ru-RU'
}

export enum IType {
  'default' = 'default',
  'medium' = 'medium',
  'high' = 'high',
  'standard' = 'standard',
  'maxres' = 'maxres',
}
