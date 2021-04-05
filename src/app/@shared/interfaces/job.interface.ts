export interface IJob {
  by: string;
  id: number;
  score: number;
  text?: string;
  time: number;
  title: string;
  type: string;
  url?: string;
  domain?: string;
}
