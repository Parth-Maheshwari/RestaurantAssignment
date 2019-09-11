import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  public menulist = [
    {
      "items":["Veg Fried Rice", "Veg Pulao"]
    },
    {
      "items": ["Chicken Gulaoti Biryani", "Chicken Hyderabadi Biryani"]
    }
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
