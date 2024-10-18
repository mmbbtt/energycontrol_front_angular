import { HttpClient, HttpHeaders} from '@angular/common/http'
import { MSource } from '../model/msource.model'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EnergyControlApiService
{
   private urlBaseApi: String = "http://local.host:8080/energycontrolback/api/";

   constructor(private httpClient: HttpClient){}

   //#region Métodos para el maestro de orígenes de datos

   
   getMSources():Observable<MSource[]>
   {
      /*
      let headers = new HttpHeaders;
      headers = headers.set('Access-Control-Allow-Origin', '*');
      headers = headers.set('Access-Control-Allow-Methods', '*');
      headers = headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type');

      return this.httpClient.get<MSource[]>(this.urlBaseApi + "MSources", {headers: headers});
      */
      return this.httpClient.get<MSource[]>(this.urlBaseApi + "MSources");
   }

   //#endregion

}