import { Component } from '@angular/core';
import {ExcelService} from './excel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [{
    eid: 'e101',
    ename: 'Manasi',
    esal: 5000,
    age:21
    },{
    eid: 'e102',
    ename: 'khusnuma',
    esal: 5000,
    age:21
    },{
    eid: 'e103',
    ename: 'Snehal',
    esal: 5000,
    age:21
    },
    {
      eid:'e104',
      ename:'jyoti',
      esal:5000,
      age:21
    },
    {
      eid:'e105',
      ename:'Ankita',
      esal: 5000,
      age:22

    }
  ];
    constructor(private excelService:ExcelService){
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
    }
    }

