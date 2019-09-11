import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { MenulistService } from '../menulist.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  public menulist = [];
  constructor(private router: Router, private route: ActivatedRoute, private _menulist: MenulistService) { }
  public restId;
  ngOnInit() {

    this.menulist = this._menulist.getmenulist();

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.restId = id;
    });
    // console.log(this.menulist[0].items[0]);
    
  }

  booknow(){
    this.router.navigate(['../booknow'], {relativeTo: this.route});
    // this.router.navigate(['home'], {relativeTo: this.route});
  }
}
