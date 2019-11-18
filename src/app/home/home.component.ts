import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
   mov=[];

  constructor(private service : DataserviceService,
              public router : Router )
               { }
  
  ngOnInit() 
  {
     let revdata:any =  this.service.Getdata();
     revdata.subscribe((data)=>{
       this.mov=data;

     });
  }

}
