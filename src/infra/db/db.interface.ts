export interface iDataBase {
  getAllUser(service: SERVICE): any;
  addUser(name: string, email: string, service: SERVICE): any;
}

export enum SUB_SATATE {
  CANCLED = 0,
  NORMAL = 1,
}

export enum SERVICE {
  VELOG = 'Velog',
}
