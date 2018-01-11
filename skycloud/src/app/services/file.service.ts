import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FileService {

  isDev: boolean;

  constructor(private http: Http) {
    this.isDev = true; // Change to false before deployment
  }
//list all files
  listFiles() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('http://localhost:3000/files/filelist');
    return this.http.get(ep, { headers: headers})
      .map(res => res.json());
  }
  //list images
  listImages() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('http://localhost:3000/files/listimages');
    return this.http.get(ep, { headers: headers})
      .map(res => res.json());
  }
 //list audios
 listAudios() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listaudios');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}
 //list videos
 listVideoss() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listvideos');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}
 //list docs
 listDocs() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listdocs');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}

 //list audios
 listaudios() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listaudios');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}

 //list videos
 listVideos() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listvideos');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}

 //list zips
 listZips() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listzips');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}

 //list others
 listOthers() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let ep = this.prepEndpoint('http://localhost:3000/files/listothres');
  return this.http.get(ep, { headers: headers})
    .map(res => res.json());
}

  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/' + ep;
    }
  }
}
