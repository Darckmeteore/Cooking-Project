import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public username: string;

  constructor() { 
    this.username = "TEST";
  }

  updateUser(userID) {
    return "";
  }
}
