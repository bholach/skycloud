import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driveinfo',
  templateUrl: './driveinfo.component.html',
  styleUrls: ['./driveinfo.component.css']
})
export class DriveinfoComponent implements OnInit {

  doc_size = 40;
  img_size = 50;
  audio_size = 80;
  video_size = 100;
  arch_size = 50;
  other_size = 0;
  constructor() { }

  ngOnInit() {
  }

}
