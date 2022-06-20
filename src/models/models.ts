export interface IStore {
  leaders: Array<object>;
}
export interface IReducer {
  type: string;
  leaders: Array<object>;
}
export type Leader = {
  index: number;
  page: number;
  user: User;
};
export type User = {
  name: string;
  score: number;
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
