import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { VehicleComponent } from './../vehicle/vehicle.component';
import { VehicleAddComponent } from './../vehicle/vehicle-add.component';
import { RouteComponent } from './../route/route.component';
import { RouteAddComponent } from './../route/route-add.component';

const routes : Routes = [
    {path:"home",component:HomeComponent},
    {path:"addroute",component:RouteAddComponent},
    {path:"addvehicle",component:VehicleAddComponent},
     {path:"vehicleInformation",component:VehicleComponent},
      {path:"routeInformation",component:RouteComponent}
     
     
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
