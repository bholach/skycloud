import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

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

}
