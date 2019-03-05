import { Component, OnInit } from '@angular/core';
import { TabsService } from './tabs.service';
import { ITab } from './tab';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'router-tabs';
  tabs: Observable<ITab[]>;
  selectedTabId: string;

  constructor(private tabsService: TabsService, public router: Router) {  }

  ngOnInit() {
    this.tabs = this.tabsService.tabs;
    this.tabsService.loadTabs();
  }

  onTabDeleteClick(tab: ITab, event: MouseEvent) {
    this.router.navigateByUrl('/');
    this.tabsService.deleteTab(tab.id);
    event.preventDefault();
  }
}
