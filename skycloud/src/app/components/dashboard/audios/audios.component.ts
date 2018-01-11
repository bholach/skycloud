import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})
export class AudiosComponent implements OnInit {

  fileData;
  count = 1;
  constructor(
    private fileService: FileService,
  ) { }

  ngOnInit() {
    this.fileService.listAudios().subscribe(data => {
      this.fileData = data;
      if ( this.fileData.length > 0 ) {
                   console.log(this.fileData);
      }
    });
  }

}
