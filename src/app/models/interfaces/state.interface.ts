import { TStatus, TStatusSlug } from "../types/states.type";


export interface IStates {
  paid: IState;
  unpaid: IState;
  overdue: IState;
}

export interface IState {
  slug: TStatusSlug;
  status: TStatus;
  icon: string;
}

