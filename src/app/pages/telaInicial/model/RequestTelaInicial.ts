export interface RequestTelaInicial {
  _id: string;
  description: string;
  resume: string;
  photos: {name:string};
  videos: string;
  rating: number;
  mediumPrice: number;
  productor: string;
  totalVotes: number;
  company: string ;
  lauchDate: string;
  releaseYaer: number;
  title: string;
  studi: Object;
  platform: string;
  highlight: boolean;
  page: number;
  perPage: number;
  genres: [String];
  platforms: [String];
  tags: [String];
  createdAt: string;
  updatedAt: string;
}


