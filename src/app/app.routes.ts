import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OpportunityListComponent } from './opportunity/opportunity-list/opportunity-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail/opportunity-detail.component';
import { OpportunityCreateComponent } from './opportunity/opportunity-create/opportunity-create.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';

export const routes: Routes = [
    {path: '', component: OpportunityListComponent},
    {path: 'volunteering/opportunities', component: OpportunityListComponent},
    {path: 'volunteering/opportunities/:id', component: OpportunityDetailComponent},
    {path: 'volunteering/opportunities/create', component: OpportunityCreateComponent},
    {path: 'register/organisation', component:RegisterComponent },
    {path: 'login', component:LoginComponent},
    {path: 'register/user', component:RegisterComponent},
    {path: 'applications/:id', component: ApplicationDetailComponent},
    {path: 'applications', component: ApplicationListComponent},
    {path: 'notifications', component: NotificationListComponent}
];
