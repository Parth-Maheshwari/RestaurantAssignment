import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name: string;
  public email: string;
  public time: Time;
  public date: Date;
  constructor() { }

}
