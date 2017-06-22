import { Component, OnInit } from '@angular/core';
import { DeliveryService } from "../delivery.service";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-vehicleAdd',
  templateUrl: '/src/app/vehicle/vehicle-add.component.html',
  styleUrls: ['/src/app/vehicle/vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  private vehicleModel: VehicleModel;
  private vehicleList: VehicleModel;
  private editVehicle: boolean;
  private makeResponse: string;
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.vehicleModel = new VehicleModel();
    this.getAllVehicles();
    this.editVehicle =false;
    // {
    //   startDest: "NEW OREANS",
    //   endDest: "DALLAS",
    //   departTime: "3:00 am",
    //   status: "ACTIVE",
    //   estArrivalTime: "3 hrs",
    //   routeName:null,

    // }
  }
  getAllVehicles(): void {
     this.vehicleModel= new VehicleModel()
    this.deliveryService.getAllVehicle().subscribe(
      data => this.vehicleList = data.json().vehicles
    );
  }
  postVehicles(): void {
   
    this.deliveryService.postVehicles(this.vehicleModel).subscribe(
      data =>    this.getAllVehicles()
    );
    
  }

 putButton(rm:VehicleModel): void {
     this.editVehicle=true;
     this.vehicleModel = rm;
 }

 putVehicle():void{
   this.editVehicle = false;
    this.deliveryService.putVehicles(this.vehicleModel).subscribe(
      data => this.getAllVehicles()
      
    );

  }

  deleteVehicle(id:number): void{
     this.deliveryService.deleteVehicle(id).subscribe(
       data => this.getAllVehicles()
     )
}

nullData(): void{
    
      this.vehicleModel = new VehicleModel();
  
}

}


export class VehicleModel {
  regisNum: number;
  vehicleStatus: string;
  vehicleMake: string;
  vehicleType: string;
  vehicleId: number;
  vehicleYear: number;
}