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
        "dishes": ["R1D1","R1D2","R1D3","R1D4","R1D5","R1D6","R1D7","R1D8","R1D9","R1D10"],
        "cuisine": "Indian"
      },
      {
        "_id": "2",
        "company": "MOREGANIC",
        "dishes": ["R2D1","R2D2","R2D3","R2D4","R2D5","R2D6","R2D7","R2D8","R2D9","R2D10"],
        "cuisine": "Italian"
      },
      {
        "_id": "3",
        "company": "SIGNIDYNE",
        "dishes": ["R3D1","R3D2","R3D3","R3D4","R3D5","R3D6","R3D7","R3D8","R3D9","R3D10"],
        "cuisine": "Indian"
      },
      {
        "_id": "4",
        "company": "QUORDATE",
        "dishes": ["R4D1","R4D2","R4D3","R4D4","R4D5","R4D6","R4D7","R4D8","R4D9","R4D10"],
        "cuisine": "Lebanese"
      }
    ];

    return menulist;
  }
}
