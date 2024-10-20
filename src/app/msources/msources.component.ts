import { Component, OnInit, ViewChild, inject} from '@angular/core';
import { MatPaginator, MatPaginatorIntl  } from '@angular/material/paginator'; 
import { MatSort, Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MSource } from '../model/msource.model';
import { EnergyControlApiService} from '../services/energyControlApi.service'
import { MatPaginatorIntlEs } from './matPaginatorIntlEs'




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

  labelPageTitle: string = "Maestro de orígenes de datos"
  labelCardTitle = "Listado de MSources"
  innerHtmlCardDescription: string = "Un <code>MSource</code> es un tipo de origen de datos de consumo de energía eléctrica. \
    Se usa para saber de donde se han obtenido los consumos, por ejemplo, de un medidor de energía, o suministrados por la compañía eléctrica.\
    <br> ";
  labelHome: string = "Inicio";
  labelColumnCode: string = "Código";
  labelColumnDesription: string = "Descripción";
  labelColumnType: string = "Tipo";
  labelColumnDetails: string = "Detalles";
  labelColumnDelete: String = "Borrar";
  labelRowsPerPage: string = "Filas por página";
  labelSearchPlaceHolder: string = "Buscar ...";
  labelSearchTitle: string = "Buscar en la tabla";


  //#endregion

  displayedColumns: string[] = ["select", "code", "description", "type", "details", "delete"];
  dataSource: MatTableDataSource<MSource>;
  readonly confirmDialog = inject(MatDialog);
  
  constructor(private apiSevice: EnergyControlApiService) { }

  //#region Paginación

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = [1, 2, 10];
  pageSize = 2;

  //#endregion

  //#region Ordenación

  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort: MatSort;

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

  //#endregion

  //#region Selección de filas

  selection = new SelectionModel<MSource>(true, []);

  isAllSelected() 
  {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Selecciona todas las filas, en el caso de que no lo estén todas.
   * Si ya están todas seleccionadas, las deslecciona.
   */
  masterToggle() 
  {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }


  //#endregion

  //#region Fila clicada

  /*
  clickedRow: MSource;

  onClickedRow(row: MSource)
  {
    if(row == this.clickedRow)
    {
      this.clickedRow = {} as MSource;
    }
    else
    {
      this.clickedRow = row;
    }
  }

  isRowClicked(row: MSource)
  {
    return this.clickedRow == row;
  }
  */
  //#endregion

  //#region Filtrado

  isFiltered: boolean = false;
  searchValue: string = "";
  searchIcon: string = "search"

  onDoFilter()
  {
    if(!this.isFiltered && this.searchValue)
    {
      this.isFiltered = true;
      this.searchIcon = "search_off";

      this.dataSource.filter = this.searchValue.trim().toLocaleLowerCase();
    }
    else
    {
      this.isFiltered = false;
      this.searchIcon = "search";
      this.searchValue = "";
      this.dataSource.filter = "";
    }
  }


  //#endregion

  ngOnInit(): void 
  {
    this.apiSevice.getMSources().subscribe((response: MSource[]) => 
      { 
        this.dataSource = new MatTableDataSource<MSource>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }); 
  }

  //#region Botón de fila detalle

  detailsIcon: String = "view_headline";
  redirectToDetails = (mSourceCode: string) => 
  {
    
  }

  //#endregion

  //#region Botón de fila borrar

  deleteIcon: String = "delete";
  redirectToDelete = (mSourceCode: string) => 
  {
    const cd = this.confirmDialog.open(
      ConfirmationDialog,
      {
        data: {name: "Borrar MSource"}
      }
    );
  }

  //#endregion
}


