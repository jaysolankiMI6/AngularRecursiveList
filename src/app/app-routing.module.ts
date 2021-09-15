import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedComponent } from './nested/nested.component';
import { HomeComponent } from './home/home.component';
import { NestedlistComponent } from './nestedlist/nestedlist.component';
import { NestedsingleComponent } from './nestedsingle/nestedsingle.component';
import { NestedRecursiveComponent } from './nested-recursive/nested-recursive.component';


const routes: Routes = [{ path: 'nested', component: NestedComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'nested-list', component: NestedlistComponent },
                        { path: 'nested-single', component: NestedsingleComponent },
                        { path: 'nested-recursive', component: NestedRecursiveComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
