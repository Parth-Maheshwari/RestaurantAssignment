import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestlistService {
  restlist=[
    {
      "id": "1",
      "company": "RETROTEX",
      "phone": "+1 (881) 499-2321",
      "address": "892 Schenck Court, Blanford, Kentucky, 2977",
      "latitude": -51.458018,
      "longitude": -167.681647,
      "cuisine": "Lebanese"
    },
    {
      "id": "2",
      "company": "MOREGANIC",
      "phone": "+1 (965) 404-3191",
      "address": "136 Dakota Place, Frierson, Oklahoma, 9627",
      "latitude": -7.736188,
      "longitude": 177.07165,
      "cuisine": "Italian"
    },
    {
      "id": "3",
      "company": "SIGNIDYNE",
      "phone": "+1 (878) 456-2355",
      "address": "845 Union Street, Zortman, North Carolina, 833",
      "latitude": -80.729605,
      "longitude": 100.581329,
      "cuisine": "Indian"
    },
    {
      "id": "4",
      "company": "QUORDATE",
      "phone": "+1 (899) 588-2057",
      "address": "536 Onderdonk Avenue, Murillo, South Carolina, 7684",
      "latitude": 35.700138,
      "longitude": -15.470252,
      "cuisine": "Lebanese"
    }
  ];

  selrestId =1;
  selrestName : string;
  constructor() { }

  getrestlist(){
    return this.restlist;
  }

  selectedrestId(id){
    this.selrestId = id;
  }

  getselectedrestId(){
    return this.selrestId;
  }

  getselectedrestName(){
    this.selrestName = this.restlist[this.selrestId-1].company;
    return this.selrestName;
  }
}