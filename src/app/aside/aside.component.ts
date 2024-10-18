import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent 
{
  labelLoadBillNaturgy: string = "Cargar factura de Naturgy";
  labelLoadConsumptionsEE2: string = "Cargar consumos Efergy E2";
  labelCheckBillConsumptions: string = "Comprobar consumos factura";
  labelSettings: string = "Configuración";
  labelGenerateDateHours: string = "Generar fechas y horas";
  labelShowMasterSources: string = "Ver maestro de orígenes de datos";
  labelShowSources: string = "Ver orígenes de datos";
}
