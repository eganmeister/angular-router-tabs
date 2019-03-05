import { Component, OnInit } from '@angular/core';
import { ITab } from './tab';
import { TabsService } from './tabs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tabs',
    template: `
        <ng-container [ngSwitch]="tab.app" *ngIf="tab">
            <app-blue *ngSwitchCase="'blue'"></app-blue>
            <app-red *ngSwitchCase="'red'"></app-red>
        </ng-container>
    `
})
export class TabBodyComponent implements OnInit {
    tab: ITab;

    constructor(private tabsService: TabsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const self = this;
        this.activatedRoute.paramMap.subscribe(params => {
            const tabId = params.get('id');
            self.tab = self.tabsService.getTab(tabId);
        });
    }
}
