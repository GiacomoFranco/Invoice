import { ESlugStates, EStates } from "../models/enums/states.enum";
import {  IStates } from "../models/interfaces/state.interface";

export const States: IStates = {
  paid: {
    slug: ESlugStates.paid,
    status: EStates.paid,
    icon: '/icons/marque-el-circulo.svg',
  },
  unpaid: {
    slug: ESlugStates.unpaid,
    status: EStates.unpaid,
    icon: '/icons/interrogatorio.svg',
  },
  overdue: {
    slug: ESlugStates.overdue,
    status: EStates.overdue,
    icon: '/icons/exclamacion.svg',
  },
};
