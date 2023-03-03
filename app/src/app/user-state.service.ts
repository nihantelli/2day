import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  public currentUser: user | undefined;
  constructor() {}
}
export class user {
  constructor(
    public id: number,
    public name: string,
    public email: string,
   
  ) {}
}
