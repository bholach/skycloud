import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  fileData;
  count = 1;
  constructor(
    private fileService: FileService,
  ) { }

  ngOnInit() {
    this.fileService.listFiles().subscribe(data => {
      this.fileData = data;
      if ( this.fileData.length > 0 ) {
                   console.log(this.fileData);
      }
    });
  }

  download(file) {
    console.log(file.dlink);
  }

}
