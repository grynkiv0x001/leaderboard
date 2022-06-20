export interface IStore {
  leaders: Array<object>;
}
export interface IReducer {
  type: string;
  leaders: Array<object>;
}
export type Leader = {
  name: string;
  index: number;
  score: number;
  page: number;
};
export type User = {
  name: string;
  score: number;
};
export interface IModalFormEdit {
  userName: string;
  userScore: number;
  index: number;
  page: number;
  setOpen: (arg: boolean) => void;
}
export interface IModalFormCreate {
  page: number;
  setOpen: (arg: boolean) => void;
}
