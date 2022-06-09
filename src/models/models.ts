export interface initialStore {
  leaders: Array<object>;
}
export interface storeReducer {
  type: string;
  leaders: Array<object>;
}
export interface leaderItem {
  name: string;
  index: number;
  score: number;
}
export interface modalFormEdit {
  index: number;
  setOpen: any;
}
