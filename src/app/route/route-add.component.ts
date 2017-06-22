import { Component, OnInit } from '@angular/core';
import { DeliveryService } from "../delivery.service";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-routeAdd',
  templateUrl: '/src/app/route/route-add.component.html',
  styleUrls: ['/src/app/route/route-add.component.css']
})
export class RouteAddComponent implements OnInit {
  private routeModel: RouteModel;
  private routeList: RouteModel;
  private editRoute: boolean;
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.routeModel = new RouteModel();
    this.getAllRoutes();
    this.editRoute =false;
    // {
    //   startDest: "NEW OREANS",
    //   endDest: "DALLAS",
    //   departTime: "3:00 am",
    //   status: "ACTIVE",
    //   estArrivalTime: "3 hrs",
    //   routeName:null,

    // }
  }
  getAllRoutes(): void {
    this.routeModel= new RouteModel()
    this.deliveryService.getAllRoute().subscribe(
      data => this.routeList = data.json().routes
    );
  }
  postRoutes(): void {
    this.deliveryService.postRoutes(this.routeModel).subscribe(
      data =>    this.getAllRoutes()
    );
  }

 putButton(rm:RouteModel): void {
     this.editRoute=true;
     this.routeModel = rm;
 }

 putRoute():void{
   this.editRoute = false;
    this.deliveryService.putRoutes(this.routeModel).subscribe(
      data => this.getAllRoutes()
      
    );

  }

  deleteRoute(id:number): void{
     this.deliveryService.deleteRoute(id).subscribe(
       data => this.getAllRoutes()
     )
}

nullData(): void{
    
      this.routeModel = new RouteModel();
  
}

}


export class RouteModel {
  startDest: string;
  endDest: string;
  departTime: string;
  status: string;
  estArrivalTime: string;
  routeName: string;


}