import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';



export const _appRoutes: Routes = [
    { path: '', loadChildren: 'app/tabs/tab.module#TabModule' },
];

@NgModule({

    imports: [RouterModule.forRoot(_appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule { }