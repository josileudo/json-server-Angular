import { Component, OnInit } from '@angular/core';
import { RouteTest } from './route';
import { RouterService } from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  isVisible = false;
  routerTest: RouteTest[] = [];

  showModal() {
    this.isVisible = true;
    this.service.list().subscribe((data) => (this.routerTest = data));
  }

  handleCancel() {
    this.isVisible = false;
    console.log('fechando modal');
  }

  public verify() {}

  constructor(private service: RouterService) {}

  ngOnInit() {}
}
