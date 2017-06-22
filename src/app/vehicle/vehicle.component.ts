import { Component, OnInit } from '@angular/core';
import { DeliveryService } from "../delivery.service";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-vehicle',
  templateUrl: '/src/app/vehicle/vehicle.component.html',
  styleUrls: ['/src/app/vehicle/vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  private vehicleModel: VehicleModel;
  private vehicleList:VehicleModel[];
  private editVehicle: boolean;
  private makeResponse: string;
  private searchMake: string;
  private searchType: string;
  private searchRegisNum: number;
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
      data => this.vehicleList = data.json().vehicles,

    );

  }
  postVehicles(): void {
  
    this.deliveryService.postVehicles(this.vehicleModel).subscribe(
      data =>    this.getAllVehicles(),
      error =>alert(error.json().error)
    );

  }

 putButton(rm:VehicleModel): void {
     this.editVehicle=true;
     this.vehicleModel = rm;
 }

 cancelButton():void{
   this.editVehicle=false;
   
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

 
 searchByVehicleType(): void{
   this.deliveryService.searchByVehicleType(this.searchType).subscribe(
      data => this.vehicleList = data.json().vehicles
    
   );
 }
    searchByVehicleMake(): void{
   this.deliveryService.searchByVehicleMake(this.searchMake).subscribe(
      data => this.vehicleList = data.json().vehicles
    
   );

}
 searchByVehicleRegNum(): void{
   this.deliveryService.searchByVehicleRegNum(this.searchRegisNum).subscribe(
      data => this.vehicleList = data.json().vehicles
    
   );

}


}




export class VehicleModel {

 vehicleMake: string;

  regisNum: number;
  vehicleStatus: string;
  vehicleType: string;
  vehicleId: number;
  vehicleYear: number;


}

 