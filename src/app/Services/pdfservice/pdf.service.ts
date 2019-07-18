import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  // /////////////////////// GENERAR PDF EN BASE A UN ARRAY DE JSONS ///////////////////////////

  // generatePdf(ddd) {

  //   var headers = this.createHeaders(["id", "nombre", "apellido", "telefono"]);

  //   var doc = new jsPDF({ format: 'letter',putOnlyUsedFonts: true, orientation: 'portrait' });
  //   doc.text('Lista de nombres', 70, 10);
  //   doc.table(10, 20, ddd, headers, { autoSize: false });
  //   doc.output('dataurlnewwindow');
  // }

  // createHeaders(keys) {
  //   var result = [];
  //   for (var i = 0; i < keys.length; i += 1) {
  //     result.push({
  //       'id': keys[i],
  //       'name': keys[i],
  //       'prompt': keys[i],
  //       'width': 65,
  //       'align': 'center',
  //       'padding': 0
  //     });
  //   }
  //   return result;
  // }

  // //////////////////// HTMl a PDF ////////////////7//
  generatePdf(){
    
  }

}
