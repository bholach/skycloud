import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  fileData;
  count = 1;
  constructor(
    private fileService: FileService,
  ) { }

  ngOnInit() {
    this.fileService.listImages().subscribe(data => {
      this.fileData = data;
      if ( this.fileData.length > 0 ) {
                   console.log(this.fileData);
      }
    });
  }

}
