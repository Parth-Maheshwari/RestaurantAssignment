import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restlist',
  templateUrl: './restlist.component.html',
  styleUrls: ['./restlist.component.css']
})
export class RestlistComponent implements OnInit {
  public restlist = [
    { "name": "Prem Rest.",
      "id" : 1
  },{ "name": "Prithvi Rest.",
      "id" : 2
  }
  ]
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
  selectingRest(rest){
    this.router.navigate([rest.id], {relativeTo: this.route});
  }

}
