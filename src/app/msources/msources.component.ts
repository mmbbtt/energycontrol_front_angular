import { Component, OnInit, ViewChild, inject} from '@angular/core';
import { MatPaginator, MatPaginatorIntl  } from '@angular/material/paginator'; 
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MSource } from '../model/msource.model';
import { EnergyControlApiService} from '../services/energyControlApi.service'
import { MatPaginatorIntlEs } from './matPaginatorIntlEs'
import {LiveAnnouncer} from '@angular/cdk/a11y';



@Component({
  selector: 'app-msources',
  templateUrl: './msources.component.html',
  styleUrl: './msources.component.css',
  providers: [
    EnergyControlApiService,
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs}
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

  displayedColumns: string[] = ["code", "description", "type"];
  dataSource: MatTableDataSource<MSource>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = [1, 2, 10];
  pageSize = 2;

  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiSevice: EnergyControlApiService) { }

  ngOnInit(): void 
  {
    this.apiSevice.getMSources().subscribe((response: MSource[]) => 
      { 
        this.dataSource = new MatTableDataSource<MSource>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }); 
  }

  announceSortChange(sortState: Sort)
  {
    if (sortState.direction) 
    {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } 
    else 
    {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
