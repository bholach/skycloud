import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {

  fileData;
  currfile;
  count = 1;
  box: Boolean = false;
  cfbox: Boolean = false;
  finfo: Boolean = false;
  list: Boolean = false;
  grid: Boolean = true;
  divToChange;
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
  show_ubox(){
    this.box = true;
  }
  boxclose(){
    this.box = false;
  }

  //cfolder
  show_cfbox(){
    this.cfbox = true;
  }
  cfboxclose(){
    this.cfbox = false;
  }
//information page
  info_on(){
    this.divToChange = document.getElementById('page');
    this.divToChange.setAttribute("class","hbody grid");
    this.finfo=true;
  }
  info_close(){
    this.finfo=false;
    this.divToChange.removeAttribute("class");
  }



  //file clicked
  file_clicked(file){
    this.currfile=file;
   
  }
  viewG(){
    this.list=false;
    this.grid=true;
  }
  viewL(){
    this.grid=false;
    this.list=true;
  }
}
