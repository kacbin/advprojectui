import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleAddComponent } from './vehicle/vehicle-add.component';
import { RouteComponent } from './route/route.component';
import { RouteAddComponent } from './route/route-add.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DeliveryService } from "./delivery.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleComponent,
    VehicleAddComponent,
    RouteComponent,
    RouteAddComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule, FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
