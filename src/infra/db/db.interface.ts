export interface iDataBase {
  getAllUser(service: SERVICE): any;
  addUser(name: string, email: string, service: SERVICE): any;
}

// 구독 상태
export enum SUB_SATATE {
  CANCLED = 0,
  NORMAL = 1,
}

export enum SERVICE {
  VELOG = 'Velog',
}
