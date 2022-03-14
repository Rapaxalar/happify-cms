export type Translations = {
  de_DE: string;
  en_US: string;
  es_US: string;
};

export type Happifier = {
  id: number;
  happifierType: string;
  humanUrl: string;
  titleTranslations: Translations;
  subtitleTranslations: Translations;
  bodyTranslations: Translations;
  imageTranslations: Translations;
  isEnabled: boolean;
  isSponsored: boolean;
  isFeatured: boolean;
  isPromoted: boolean;
  originalImageTranslations:Translations;
};

export type Data = {
  happifierById: Happifier;
};