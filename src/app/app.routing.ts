import { PartaComponent } from './parta/parta.component';
import {PartbComponent} from'./partb/partb.component';
import {HomeComponent} from'./home/home.component';

export const AppRoutes: any = [
    { path:"home", component: HomeComponent },
    { path: "parta", component: PartaComponent },
    { path: "partb", component: PartbComponent }
];
 
export const AppComponents: any = [
    PartaComponent,
    PartbComponent,
    HomeComponent
];
