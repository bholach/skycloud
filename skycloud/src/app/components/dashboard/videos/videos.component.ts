import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  fileData;
  count = 1;
  constructor(
    private fileService: FileService,
  ) { }

  ngOnInit() {
    this.fileService.listVideos().subscribe(data => {
      this.fileData = data;
      if ( this.fileData.length > 0 ) {
                   console.log(this.fileData);
      }
    });
  }

}
