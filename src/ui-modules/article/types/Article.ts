export type TArticle = {
  apiUrl: string;
  fields: TFields;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  tags: TTag[];
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
};

type TTag = {
  apiUrl: string;
  bio: string;
  bylineImageUrl: string;
  bylineLargeImageUrl: string;
  firstName: string;
  id: string;
  lastName: string;
  references: any[];
  sectionId: string;
  sectionName: string;
  type: string;
  webTitle: string;
  webUrl: string;
};

type TFields = {
  headline: string;
  shortUrl: string;
  starRating: string;
  thumbnail: string;
};
