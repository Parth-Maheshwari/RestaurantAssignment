import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'khaneMeKyaHai';
  constructor (private router : Router, private route: ActivatedRoute ) { }
  // reopen = true;
  ngOnInit() {}
}
