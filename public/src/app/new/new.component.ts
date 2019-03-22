import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newItem: any;
  newAddon: any;

  errors: any = {
    name: "",
    type: ""
  };

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newItem = {name: "", type: "", addons: []}
    this.newAddon = {name: "",content: ""}
    this._route.params.subscribe((params: Params) => {
      this.goNew();
   });
  }

  addItem() {
    this.newItem.addons.push(this.newAddon);
    this._httpService.addNew(this.newItem).subscribe(data => {
     
      console.log("adding item", data);
      if (data['errors'])
      this.errors = data['errors'];
    else
      this._router.navigate(['/']);
    })
    this.newItem = {name: "", type: ""}
    this.newAddon = {name: "",content: ""}
  }

  goNew(){
    this._router.navigate(['/new']);
  }

}
