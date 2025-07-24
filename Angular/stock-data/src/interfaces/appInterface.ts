export interface IEmployee {
  userName: string;
  userAge: number
}

export interface IManager {
  userName: string;
  userAge: number
}

export default interface IDirector {
  userName: string;
  userAge: number;
  userSalary?: number;
  userImage: string;
  id: number;
}
