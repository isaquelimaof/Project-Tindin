export class RequestCarousel {

  _id!: string;
  description!: string;
  resume!: string;
  photos!: [{ name: string, url: string, _id: string }, { name: string, url: string, _id: string }, { name: string, url: string, _id: string }, { name: string, url: string, _id: string },{ name: string, url: string, _id: string }];
  videos!: [{ type: string, url: string, _id: string }, { type: string, url: string, _id: string }];
  rating!: number;
  mediumPrice!: number;
  productor!: string;
  totalVotes!: number;
  company!: string;
  lauchDate!: string;
  releaseYaer!: number;
  title!: string;
  studio!: Object;
  platform!: string;
  highlight!: boolean;
  page!: number;
  perPage!: number;
  genres!: [String];
  platforms!: [String];
  tags!: [String];
  createdAt!: string;
  updatedAt!: string;
  jwt!: string;

}




