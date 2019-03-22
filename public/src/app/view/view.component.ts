import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewItem: any = {name: "", type: "", description: "", likes: 0, addons: []};
  addon: any = {name: "", content: ""}

  errors: any = {
    name: "",
    type: ""
  };
  
  isLiked = false;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this._httpService.getOne( this._route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log("Got item", data);
      this.viewItem = data;
    })
  }
  updateItem() {
    let id = this._route.snapshot.paramMap.get('id');
    this.viewItem.addons.push(this.addon);
    this._httpService.updateOne(id, this.viewItem).subscribe(data => {
      console.log("updatingproduct", data);
      if (data['errors'])
        this.errors = data['errors'];
      else
        this._router.navigate(['/']);
    })
    this.viewItem= { name: "", type: "", description: "", likes: 0, addons: [] }
  }
  delete(id) {
    this._httpService.deleteOne(id).subscribe(data => {
      console.log("deleteing item", id)
     
    })
  }
  like(){
    this.viewItem.likes++;
    let id = this._route.snapshot.paramMap.get('id');
    this._httpService.updateOne(id, this.viewItem).subscribe(data => {
      console.log("updatingproduct", data);
      this.isLiked = true;
    })
    
  }

}
