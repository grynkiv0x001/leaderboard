export interface IStoreLeaders {
  leaders: Array<object> | Array<number>;
}
export interface IReducerLeaders {
  type: string;
  leaders: Array<object> | Array<number>;
}
export interface IStoreSettings {
  sorting: string;
}
export interface IReducerSettings {
  type: string;
  sorting: string;
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
