import { Component, OnInit } from '@angular/core';
import { ECollectionMethod, ICollectionMethod } from '../../core/model/collectionMethod.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-bill-naturgy',
  templateUrl: './load-bill-naturgy.component.html',
  styleUrl: './load-bill-naturgy.component.css'
})
export class LoadBillNaturgyComponent implements OnInit
{
  title: string = "Cargar factura Naturgy"
  labelHome: string = "Inicio";
  labelFormInputs: string = "Introduce los siguientes datos:";
  labelInputCsv: string = "CSV de la curva horaria de la factura";
  labelInputIssueDate: string = "Fecha de emisión de la factura";
  labelInputCollectionMethod: string = "Método de obtención de los consumos";
  labelSubmitButton: string = "Cargar"

  collectionMethods: ICollectionMethod[];

  csvFile: File | null;
  issueDate: Date = new Date();
  collectionMethod: ECollectionMethod = ECollectionMethod.UNKNOWN;

  inputsFormGroup = new FormGroup({
     fcCsvFile : new FormControl('', Validators.required)
    ,fcIssueDate : new FormControl('', Validators.required)
    ,fcCollectionMethod : new FormControl('', Validators.required)
  });

  constructor(){}

  ngOnInit(): void 
  {
    this.collectionMethods = [
      {value: ECollectionMethod.REAL, displayValue: 'Real'},
      {value: ECollectionMethod.SIMULATED, displayValue: 'Estimado'},
      {value: ECollectionMethod.UNKNOWN, displayValue: 'Desconocido'}
    ];
  }

  onCsvInputFileChange(fileInputEvent: any)
  {
    

    if(fileInputEvent.target.files[0])
    {
      this.csvFile = fileInputEvent.target.files[0];
    }
  }

  onCsvInputFileCancel(event: any)
  {
    console.log("Entrando en onCsvInputFileCancel()");
    this.csvFile = null;
  }

  onIssueDateChange(dateInputEvent: any)
  {
    if(dateInputEvent)
    {
      this.issueDate = new Date(dateInputEvent.target.value);

      console.log("issueDate = " + this.issueDate);
    }
  }

  onSubmit()
  {
    if(this.csvFile && this.issueDate && this.collectionMethod)
    {
      console.log("csvFile = " + this.csvFile.name); 
      console.log("issueDate = " + this.issueDate);
      console.log("collectionMethod = " + this.collectionMethod);
    }

  }
}
