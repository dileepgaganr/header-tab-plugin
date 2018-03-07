import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirsttabComponent } from './firsttab/firsttab.component';
import { SecondtabComponent } from './secondtab/secondtab.component';
import { ThirdtabComponent } from './thirdtab/thirdtab.component';



export const _tabRoutes: Routes = [
    {
        path: '',  children: [
            { path: 'First', component: FirsttabComponent },
            { path: 'Second', component: SecondtabComponent },
            { path: 'Third', component: ThirdtabComponent },

        ]
    }
];

@NgModule({

    imports: [RouterModule.forChild(_tabRoutes)],
    exports: [RouterModule]
})

export class TabRouteModule { }