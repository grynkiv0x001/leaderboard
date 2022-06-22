export interface IStore {
  leaders: Array<object> | Array<number>;
}
export interface IReducer {
  type: string;
  leaders: Array<object> | Array<number>;
}
export type Leader = {
  index: number;
  page: number;
  user: User;
  showStatistic: boolean;
};
export type User = {
  name: string;
  score: number;
  diff?: number;
};
export interface IModalFormEdit {
  user: User;
  index: number;
  page: number;
  setOpen: (arg: boolean) => void;
}
export interface IModalFormCreate {
  page: number;
  setOpen: (arg: boolean) => void;
}
