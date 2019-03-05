import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { TabsService } from './tabs.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NewTabGuard implements CanActivate {
    constructor(private tabsService: TabsService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const app = route.paramMap.get('app');
        const title = prompt('Select Tab Name:', 'New Tab');

        if (title) {
            const tab = this.tabsService.createTab(app, title);
            this.router.navigateByUrl(`/tabs/${tab.id}`);
        }

        return false;
    }
}
