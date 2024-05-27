import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { DashboardComponent } from './components/adminstrateur/dashboard/dashboard.component';
import { CreateInterventionComponent } from './intervention/intervention.component';
import { ListInterventionComponent } from './listintervention/listintervention.component';
import { AdminInterventionComponent } from './admin-intervention/admin-intervention.component';
import { ModuleManagementComponent } from './module-management/module-management.component';


export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "login", component: LoginComponent },
    {
        path: "",
        component: MainContainerComponent,
        children: [
            {
                path: "adminDashboard",
                component: DashboardComponent,
            },
            {
                path: "adminDashboard/:id",
                component: DashboardComponent,
            },
            {
                path: "intervention",
                component: CreateInterventionComponent,
            },{
                path: "listing",
                component: ListInterventionComponent,
            },{
                path: "listAdmin",
                component: AdminInterventionComponent,
            },{
                path: "moduleAdmin",
                component: ModuleManagementComponent,
            }
            

        ]
    },
    { path: "**", component:  PageNotFoundComponent},
];


