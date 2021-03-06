import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/excelservice/excel.service';
import { PdfService } from 'src/app/Services/pdfservice/pdf.service';
import { SocketService } from 'src/app/Services/socketService/socket.service';
import * as printJS from "print-js";
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  comp: any = {
    nombre: '',
    apellido: '',
    id: '',
    telefono: ''
  }

  items = [];

  socketArray = [];



  constructor(
    private excelService: ExcelService,
    private pdfservice: PdfService,
    private socketService: SocketService
  ) {
    for (var i = 0; i < 1000; i++) {
      this.comp = {
        nombre: ['name ' + i],
        apellido: ['apellido ' + i],
        id: [i],
        telefono: [Math.floor(Math.random() * 9999999)]
      }
      this.items.push(Object.assign({}, this.comp));
    }
  }

  ngOnInit() {
    this.socketService.socket.connect();
    this.socketService.onNewMessage().subscribe((data: any) => {
      this.socketArray.push(data);
    })
  }

  print() {
    ///// Imprime la pagina pero ignora CSS por lo tanto ignora graficas
    // printJS({
    //   printable: 'pdf',
    //   type: 'html',
    //   documentTitle: 'Reporte'
    // });

    const elementToPrint = document.getElementById('pdf');
    const pdf = new jspdf('p', 'pt', 'letter');
    var options = {
      format: 'JPEG',
      pagesplit: true, 
      margin: { top: 10, right: 10, bottom: 10, left: 10, useFor: 'content' },
      dim: { w: 400, h: 600 }
    }

    // Height: 792
    // Width: 612
    console.log("Height: " + pdf.internal.pageSize.height + "\nWidth: " + pdf.internal.pageSize.width);

    pdf.addHTML(elementToPrint, options, () => {
      pdf.save();
    });

    // TESTING
    // var canvas = document.querySelector('chart1');

  }

}