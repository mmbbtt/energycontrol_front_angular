import { Component, OnInit} from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator'; 
import { MSource } from '../model/msource.model';
import { EnergyControlApiService} from '../services/energyControlApi.service'
import { Helper } from '../services/Helper'
import { MatPaginatorIntlEs } from './matPaginatorIntlEs'



@Component({
  selector: 'app-msources',
  templateUrl: './msources.component.html',
  styleUrl: './msources.component.css',
  providers: [
    EnergyControlApiService, {provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs}
  ]
})
export class MsourcesComponent implements OnInit
{
  //#region Etiquetas usadas en la plantilla HTML

  title: string = "Maestro de orígenes de datos"
  labelHome: string = "Inicio";
  labelColumnCode: string = "Código";
  labelColumnDesription: string = "Descripción";
  labelColumnType: string = "Tipo";
  labelRowsPerPage: string = "Filas por página";
  labelSearchPlaceHolder: string = "Buscar ...";
  labelSearchTitle: string = "Buscar en la tabla";

  //#endregion

  msources: MSource[] = []; //Origen de datos

  constructor(private apiSevice: EnergyControlApiService) { }

  ngOnInit(): void 
  {
    this.apiSevice.getMSources().subscribe((response: MSource[]) => 
      { 
        this.totalItems = this.msources.length;

        this.msources = response;
        this.totalItems = this.msources.length;
        this.items = this.getData(this.currentPage, this.pageSize);
      }); 
  }

  //#region Paginador

  totalItems: number = 0;
  pageSize: number = 2;
  currentPage:number = 0;
  pageSizeOptions = [1, 2, 10];
  showFirstLastButtons = "showFirstLastButtons";

  items : MSource[] = [];

  getData(currentPage: number, pageSize:number): MSource[]
  {
    var startIndex: number = Helper.startIndexOfPage(this.currentPage, this.msources.length, this.pageSize);

    return this.msources.slice(startIndex, startIndex + this.pageSize);
  }

  pageChanged(event: PageEvent) 
  {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.items = this.getData(this.currentPage, this.pageSize);
  }

  //#endregion
}
