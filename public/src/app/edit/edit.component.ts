import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updatedItem: any;
  id: any;

  errors: any = {
    name: "",
    type: ""
  };

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.updatedItem = { name: "", type: "", addons: [] }
    this.getOneItem();

  }
  getOneItem() {
    this._httpService.getOne(this._route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.updatedItem = { name: data['name'], type: data['type'], addons: data['addons'] }

      })
  }
  updateItem() {
    let id = this._route.snapshot.paramMap.get('id');
    this._httpService.updateOne(id, this.updatedItem).subscribe(data => {
      console.log("updatingproduct", data);
      if (data['errors'])
        this.errors = data['errors'];
      else
        this._router.navigate(['/']);
    })
    this.updatedItem = { name: "", type: "" }
  }
  goEdit() {
    this._router.navigate(['/edit']);

  }
}
