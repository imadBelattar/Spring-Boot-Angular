import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { DashboardComponent } from './components/adminstrateur/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { CreateInterventionComponent } from './intervention/intervention.component';
import { ModuleManagementComponent } from './components/module-management/module-management.component';
import { EnseigantDashboardComponent } from './components/enseignant/enseigant-dashboard/enseigant-dashboard.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "login", component: LoginComponent },
    {
        path: "",
        component: MainContainerComponent,
        canActivate: [authGuard],
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
                path: "addIntervention",
                component: CreateInterventionComponent,
            },
            {
                path: "modules",
                component: ModuleManagementComponent,
            },
            {
                path: "enseignantDashboard",
                component: EnseigantDashboardComponent,
            },
        ]
    },
    { path: "**", component:  PageNotFoundComponent},
    
];
