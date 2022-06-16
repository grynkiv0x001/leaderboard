export interface IStore {
  leaders: Array<object> | null;
}
export interface IReducer {
  type: string;
  leaders: Array<object> | null;
}
export type Leader = {
  name: string;
  index: number;
  score: number;
};
export type User = {
  name: string;
  score: number;
};
export interface IModalFormEdit {
  index: number;
  setOpen: (arg: boolean) => void;
}
export interface IModalFormCreate {
  setOpen: (arg: boolean) => void;
}
