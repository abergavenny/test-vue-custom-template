export interface RandomState {
  value: number;
}

export interface RootState {
  hello: string;
  random?: RandomState;
}
