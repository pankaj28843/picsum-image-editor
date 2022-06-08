export type PicsumImageInfo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type PicsumImageOptions = {
  width: number;
  height: number;
  blur?: number;
  grayscale?: boolean;
};
