import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  current = 'class="active"';

  dashboard = false;
  home = false;
  documents = false;
  image = false;
  video = false;
  audio = false;
  zip = false;
  other = false;

  divToChange;
  constructor() { }

  ngOnInit() {
   this.dashboard = true;
   this.divToChange = document.getElementById('dashboard');
   this.divToChange.setAttribute("class","active");
  }

  toggle_all = function(){
    this.dashboard = false;
    this.home = false;
    this.documents = false;
    this.image = false;
    this.video = false;
    this.audio = false;
    this.zip = false;
    this.other = false;
  };

  dash_toggle = function() {
    this.toggle_all();
    this.dashboard = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('dashboard');
   this.divToChange.setAttribute("class","active");
  };

  home_toggle = function() {
    this.toggle_all();
    this.home = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('home');
   this.divToChange.setAttribute("class","active");
  };

  audio_toggle = function() {
    this.toggle_all();
    this.audio = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('audio');
   this.divToChange.setAttribute("class","active");
  };

  video_toggle = function() {
    this.toggle_all();
    this.video = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('video');
   this.divToChange.setAttribute("class","active");
  };

  doc_toggle = function() {
    this.toggle_all();
    this.documents = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('doc');
   this.divToChange.setAttribute("class","active");
  };

  image_toggle = function() {
    this.toggle_all();
    this.image = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('image');
   this.divToChange.setAttribute("class","active");
  };

  zip_toggle = function() {
    this.toggle_all();
    this.zip = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('zip');
   this.divToChange.setAttribute("class","active");
  };

  other_toggle = function() {
    this.toggle_all();
    this.other = true ;
    this.divToChange.removeAttribute("class");
    this.divToChange = document.getElementById('other');
   this.divToChange.setAttribute("class","active");
  };



}
