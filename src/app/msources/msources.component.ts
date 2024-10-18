import { Component, OnInit} from '@angular/core';
import { MSource } from '../model/msource.model';
import {EnergyControlApiService} from '../services/energyControlApi.service'

@Component({
  selector: 'app-msources',
  templateUrl: './msources.component.html',
  styleUrl: './msources.component.css',
  providers: [EnergyControlApiService]
})
export class MsourcesComponent implements OnInit
{
  title: string = "Maestro de orígenes de datos"
  labelHome: string = "Inicio";
  labelColumnCode = "Código";
  labelColumnDesription = "Descripción";
  labelColumnType = "Tipo";
  labelRowsPerPage = "Filas por página";
  labelSearchPlaceHolder = "Buscar ...";
  labelSearchTitle = "Buscar en la tabla";

  rowsPerPage: string;

  msources: MSource[] = [];

  constructor(private apiSevice: EnergyControlApiService)
  {
    /*
    this.msources.push(new MSource("EE2", "Efergy E2 Classic", ESourceType.ConsumptionMeter));
    this.msources.push(new MSource("FAC", "Factura", ESourceType.Bill));
    this.msources.push(new MSource("UFD", "UFD Distribución Electricidad, S.A", ESourceType.DistributionCompany));
    */
  }

  ngOnInit(): void 
  {
    this.apiSevice.getMSources().subscribe((response: MSource[]) => 
      { 
        this.msources = response;
      });
  }

}
