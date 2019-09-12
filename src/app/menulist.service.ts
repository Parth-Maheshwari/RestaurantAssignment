import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {

  constructor(private http: HttpClient) { }
  getmenulist(){
    let menulist = [
      {
        "_id": "1",
        "company": "RETROTEX",
        "dishes": ["R1 Dish 1","R1 Dish 2","R1 Dish 3","R1 Dish 4","R1 Dish 5","R1 Dish 6","R1 Dish 7","R1 Dish 8","R1 Dish 9","R1 Dish 10"],
        "cuisine": "Indian"
      },
      {
        "_id": "2",
        "company": "MOREGANIC",
        "dishes": ["R2 Dish 1","R2 Dish 2","R2 Dish 3","R2 Dish 4","R2 Dish 5","R2 Dish 6","R2 Dish 7","R2 Dish 8","R2 Dish 9","R2 Dish 10"],
        "cuisine": "Italian"
      },
      {
        "_id": "3",
        "company": "SIGNIDYNE",
        "dishes": ["R3 Dish 1","R3 Dish 2","R3 Dish 3","R3 Dish 4","R3 Dish 5","R3 Dish 6","R3 Dish 7","R3 Dish 8","R3 Dish 9","R3 Dish 10"],
        "cuisine": "Indian"
      },
      {
        "_id": "4",
        "company": "QUORDATE",
        "dishes": ["R4 Dish 1","R4 Dish 2","R4 Dish 3","R4 Dish 4","R4 Dish 5","R4 Dish 6","R4 Dish 7","R4 Dish 8","R4 Dish 9","R4 Dish 10"],
        "cuisine": "Lebanese"
      }
    ];

    return menulist;
  }
}
