import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public user: any;

  constructor() { 
  }

  updateUser(userID) {
    return "";
  }
}
