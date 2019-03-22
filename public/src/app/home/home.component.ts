import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  id: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this._httpService.getAll().subscribe(data => {
        console.log("Got all", data);
        this.items = data;
      })
    }
    
    delete(id) {
      this._httpService.deleteOne(id).subscribe(data => {
        console.log("deleteing item", this.id)
        this.getAll();
      })
    }
  
    goHome() {
      this._router.navigate(['/']);
    }

}
