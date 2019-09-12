import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MenulistService } from '../menulist.service';
import { RestlistService } from '../restlist.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})

export class BooknowComponent implements OnInit {
  constructor(private router:Router, 
    private route: ActivatedRoute,
    private _menulist: MenulistService,
    private _restlist: RestlistService
    ) { }

    bookingform = new FormGroup({
      name : new FormControl('Foo'),
      email : new FormControl('foo@bar.xyz'),
      guests : new FormControl('2'),
      date : new FormControl('2019-09-10'),
      time : new FormControl('20:00')
    });
  public restId:number;
  public restName:string;
  ngOnInit() {
    this.restId = this._restlist.getselectedrestId();
    this.restName = this._restlist.getselectedrestName();
  }


  onSubmit(user){

    alert(user.value.name + "'s booking for " + this.restName + this.restId +
     " has been confirmed for" + user.value.date + user.value.time + "\n Happy Eating..!!");
    this.router.navigate(['/home']);
  }
}