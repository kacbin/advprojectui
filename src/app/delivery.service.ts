import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { VehicleModel } from './vehicle/vehicle.component';

import { RouteModel } from './route/route.component';

@Injectable()
export class DeliveryService {
  private vehicleURL: string = "http://localhost:9090/advance-project/vehicle/all";
  private vehicleURLPost: string = "http://localhost:9090/advance-project/vehicle";
  private vehicleURLPut: string = "http://localhost:9090/advance-project/vehicle";
  private vehicleURLDelete: string = "http://localhost:9090/advance-project/vehicle";
  private vehicleURLsearchByVehicleType: string = "http://localhost:9090/advance-project/vehicle/vehicletype?vehicleType=";
  private vehicleURLsearchByVehicleMake: string = "http://localhost:9090/advance-project/vehicle/vehiclemake?vehicleMake=";
  private vehicleURLsearchByRegisNum: string = "http://localhost:9090/advance-project/vehicle/vehiclenumber?vehicleRegNum=";

  private routeURL: string = "http://localhost:9090/advance-project/route/all";
  private routeURLPost: string = "http://localhost:9090/advance-project/route";
  private routeURLPut: string = "http://localhost:9090/advance-project/route";
  private routeURLDelete: string = "http://localhost:9090/advance-project/route";

  private routeURLSearchByRouteName: string = "http://localhost:9090/advance-project/route/routename?routeName=";
  private routeURLSearchByRouteId: string ="http://localhost:9090/advance-project/route/routeId?routeId=";

  constructor(private http: Http) { }

  getAllVehicle(): Observable<Response> {
    return this.http.get(this.vehicleURL);
  }
  postVehicles(vehicleModel: VehicleModel): Observable<Response> {
    return this.http.post(this.vehicleURLPost, vehicleModel);
  }

  putVehicles(vehicleModel: VehicleModel): Observable<Response> {
    return this.http.put(this.vehicleURLPut, vehicleModel);
  }

  deleteVehicle(id: number): Observable<Response> {
    return this.http.delete(this.vehicleURLDelete + "/" + id);
  }

  searchByVehicleType(smvt:string):Observable<Response>{
    return this.http.get(this.vehicleURLsearchByVehicleType+ smvt);
  }
  searchByVehicleMake(smvm:string):Observable<Response>{
    return this.http.get(this.vehicleURLsearchByVehicleMake+ smvm);
  }

 searchByVehicleRegNum(smr:number):Observable<Response>{
    return this.http.get(this.vehicleURLsearchByRegisNum+ smr);
  }

  getAllRoute(): Observable<Response> {
    return this.http.get(this.routeURL);
  }
  postRoutes(routeModel: RouteModel): Observable<Response> {
    return this.http.post(this.routeURLPost, routeModel);
  }

  putRoutes(routeModel: RouteModel): Observable<Response> {
    return this.http.put(this.routeURLPut, routeModel);
  }

  deleteRoute(id: number): Observable<Response> {
    return this.http.delete(this.routeURLDelete + "/" + id);
  }

  searchByRouteName(smr:string):Observable<Response>{
    return this.http.get(this.routeURLSearchByRouteName + smr);
  }

searchByRouteId(id :string):Observable<Response>{
    return this.http.get(this.routeURLSearchByRouteId + id);
  }
 

}


