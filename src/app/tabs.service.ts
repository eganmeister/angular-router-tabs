import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITab } from './tab';
import * as uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class TabsService {
    tabs = new BehaviorSubject<ITab[]>([]);
    private _tabsArray: ITab[] = [];

    loadTabs() {
        const tabsJson = localStorage.getItem('tabs');
        if (tabsJson) {
            const tabs: ITab[] = JSON.parse(tabsJson);
            this._tabsArray = [...this._tabsArray, ...tabs];
            this.refreshTabs();
        }
    }

    createTab(app: string, title: string): ITab {
        const tab: ITab = {
            id: uuid(),
            title,
            app
        };
        this._tabsArray = [...this._tabsArray, tab];
        this.refreshTabs();
        return tab;
    }

    deleteTab(tabId: string) {
        this._tabsArray = this._tabsArray.filter(tab => tab.id !== tabId);
        this.refreshTabs();
    }

    getTab(tabId: string): ITab {
        return this._tabsArray.find(tab => tab.id === tabId);
    }

    private refreshTabs() {
        const tabsJson = JSON.stringify(this._tabsArray);
        localStorage.setItem('tabs', tabsJson);

        this.tabs.next(this._tabsArray);
    }
}
