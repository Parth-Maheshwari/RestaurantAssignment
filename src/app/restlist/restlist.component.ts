import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { RestlistService } from '../restlist.service';

@Component({
  selector: 'app-restlist',
  templateUrl: './restlist.component.html',
  styleUrls: ['./restlist.component.css']
})
export class RestlistComponent implements OnInit {
  public restlist = [];
  constructor(private route:ActivatedRoute, private router:Router, private _restlist: RestlistService) { }

  ngOnInit() {
    this.restlist = this._restlist.getrestlist();
  }
  selectingRest(rest){
    this.router.navigate([rest.id], {relativeTo: this.route});
  }

}
