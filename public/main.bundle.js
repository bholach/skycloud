webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bodypart{\n  margin-top:50px;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n  <div class=\"bodypart grid\">\n  <router-outlet ></router-outlet>\n\n<app-footer></app-footer>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.Url = '../assets/images/image1.jpeg';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashhome_dashhome_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashhome/dashhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_documents_documents_component__ = __webpack_require__("../../../../../src/app/components/dashboard/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_audios_audios_component__ = __webpack_require__("../../../../../src/app/components/dashboard/audios/audios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/dashboard/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_images_images_component__ = __webpack_require__("../../../../../src/app/components/dashboard/images/images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_zips_zips_component__ = __webpack_require__("../../../../../src/app/components/dashboard/zips/zips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_others_others_component__ = __webpack_require__("../../../../../src/app/components/dashboard/others/others.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_driveinfo_driveinfo_component__ = __webpack_require__("../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */] }
];
//  canActivate: [AuthGuard]
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashhome_dashhome_component__["a" /* DashhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dashboard_audios_audios_component__["a" /* AudiosComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dashboard_videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_images_images_component__["a" /* ImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dashboard_zips_zips_component__["a" /* ZipsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dashboard_others_others_component__["a" /* OthersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_dashboard_driveinfo_driveinfo_component__["a" /* DriveinfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_file_service__["a" /* FileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/audios/audios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/audios/audios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title center\">Audios</h3>\n  </div>\n\n\n  <!-- table -->\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Audios</th>\n        <th>Size</th>\n        <th>Upload Date</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n\n    <tbody *ngIf=\"fileData\">\n        <tr class=\"\" *ngFor=\"let file of fileData\">\n          <td>{{ count }}</td>\n          <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n          <td>{{ file.size}} &nbsp;bytes</td>\n          <td>{{ file.date }}</td>        \n          <td>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-download\"></i></a><span></span>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-share-alt\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!fileData\">\n          <tr><td></td>\n            <td>No Files !</td>\n          </tr>\n        </tbody>\n    </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/audios/audios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudiosComponent = (function () {
    function AudiosComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    AudiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listAudios().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    AudiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audios',
            template: __webpack_require__("../../../../../src/app/components/dashboard/audios/audios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/audios/audios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], AudiosComponent);
    return AudiosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dash-head{\n      -ms-grid-columns: 2fr 8fr;\n          grid-template-columns: 2fr 8fr;\n      min-height:84vh;\n      height:auto;\n      margin-top: 5px;\n}\n.options{\n  background: #2780E3;\n}\n.menu{width:100%;}\n.menu>ul{list-style: none; margin:0 0 0 -40px; }\n.menu>ul>li{\n  border-bottom:1px solid #333;\n  padding:10px;\n  display:-ms-grid;\n  display:grid;\n  -ms-grid-columns: 0.2fr 1fr;\n      grid-template-columns: 0.2fr 1fr;\n}\n.menu>ul>li>i{\n  text-align: center;\n}\n.menu>ul>li:hover {\n  background:rgb(255, 102, 0);\n  overflow-x: none;\n  cursor: pointer;\n}\n\n.active{\n  background:#222;\n}\n.menu>ul>li>a{\n  color:#fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.options>h4{\n  text-align: center;\n  font-weight: bold;\n}\n.options>hr{\n  border: 2px solid #fff;\n}\n\n@media screen and (max-width:686px)\n{\n  .dash-head{\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n}\n.fas{\n  color:#fff;\n  padding:0 10px 0 0;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid dash-head\">\n  <div class=\"options\">\n       <h4>User Dashboard</h4>\n       <hr>\n       <div class=\"menu\">\n         <ul >\n           <li  (click)=\"dash_toggle()\" id=\"dashboard\"><i class=\"fas fa-dashcube\"></i><a>Dashboard</a></li>\n           <li (click)=\"home_toggle()\" id=\"home\"><i class=\"fas fa-home\"></i><a >Home</a></li>\n           <li  (click)=\"doc_toggle()\" id=\"doc\"><i class=\"fas fa-video\"></i><a >  Documents</a></li>\n           <li (click)=\"audio_toggle()\" id=\"audio\"><i class=\"fas fa-music\"></i> <a > Audios</a></li>\n           <li (click)=\"video_toggle()\" id=\"video\"><i class=\"fas fa-video\"></i><a>  Videos</a></li>\n           <li (click)=\"image_toggle()\" id=\"image\"><i class=\"fas fa-image fa-1x\"></i><a >  Images</a></li>\n           <li (click)=\"zip_toggle()\" id=\"zip\"><i class=\"fas fa-archive\"></i> <a > Archives</a></li>\n           <li (click)=\"other_toggle()\" id=\"other\"><i class=\"fas fa-file\"></i><a >  Others</a></li>\n         </ul>\n       </div>\n  </div>\n<div *ngIf= \"dashboard\">\n  <app-driveinfo></app-driveinfo>\n</div>\n\n<div *ngIf= \"home\">\n  <app-dashhome></app-dashhome>\n</div>\n\n<div *ngIf= \"documents\">\n  <app-documents></app-documents>\n</div>\n\n<div *ngIf= \"audio\">\n  <app-audios></app-audios>\n</div>\n\n<div *ngIf= \"video\">\n  <app-videos></app-videos>\n</div>\n\n<div *ngIf= \"image\">\n  <app-images></app-images>\n</div>\n\n<div *ngIf= \"zip\">\n  <app-zips></app-zips>\n</div>\n\n<div *ngIf= \"other\">\n  <app-others></app-others>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.current = 'class="active"';
        this.dashboard = false;
        this.home = false;
        this.documents = false;
        this.image = false;
        this.video = false;
        this.audio = false;
        this.zip = false;
        this.other = false;
        this.toggle_all = function () {
            this.dashboard = false;
            this.home = false;
            this.documents = false;
            this.image = false;
            this.video = false;
            this.audio = false;
            this.zip = false;
            this.other = false;
        };
        this.dash_toggle = function () {
            this.toggle_all();
            this.dashboard = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('dashboard');
            this.divToChange.setAttribute("class", "active");
        };
        this.home_toggle = function () {
            this.toggle_all();
            this.home = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('home');
            this.divToChange.setAttribute("class", "active");
        };
        this.audio_toggle = function () {
            this.toggle_all();
            this.audio = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('audio');
            this.divToChange.setAttribute("class", "active");
        };
        this.video_toggle = function () {
            this.toggle_all();
            this.video = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('video');
            this.divToChange.setAttribute("class", "active");
        };
        this.doc_toggle = function () {
            this.toggle_all();
            this.documents = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('doc');
            this.divToChange.setAttribute("class", "active");
        };
        this.image_toggle = function () {
            this.toggle_all();
            this.image = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('image');
            this.divToChange.setAttribute("class", "active");
        };
        this.zip_toggle = function () {
            this.toggle_all();
            this.zip = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('zip');
            this.divToChange.setAttribute("class", "active");
        };
        this.other_toggle = function () {
            this.toggle_all();
            this.other = true;
            this.divToChange.removeAttribute("class");
            this.divToChange = document.getElementById('other');
            this.divToChange.setAttribute("class", "active");
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.dashboard = true;
        this.divToChange = document.getElementById('dashboard');
        this.divToChange.setAttribute("class", "active");
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashhome/dashhome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hbody{\n  -ms-grid-columns: 1fr 0.4fr;\n      grid-template-columns: 1fr 0.4fr;\n}\n.panel-heading{\n  -ms-grid-columns: 3fr 1fr;\n      grid-template-columns: 3fr 1fr;\n}\n.panel-body{\n \n}\n.form_box{\n   padding:10px !important;\n   margin: 10px !important;\n}\ni{\n  cursor: pointer;\n}\nspan{\n  padding:5px;\n}\n.option{\n  -ms-grid-columns: 0.5fr 0.3fr 0.5fr 0.3fr;\n      grid-template-columns: 0.5fr 0.3fr 0.5fr 0.3fr;\n}\n.loptions,.lmenu{\n  background: #F5F5F5;\n}\n.breadcrumb{\n    margin-bottom: 0 !important;\n}\n.options{\n   list-style: none;\n}\n.options>li{\n  display: inline-block;\n  margin: 10px;\n}\n.options>li:hover{\n  color:#0bf;\n}\nul{margin:0;padding:0;}\n.ul_table{\n  list-style: none;\n}\n.ul_table>li{\n  display: inline;\n}\n.thead>ul,.files_list{\n  list-style: none;\n  display:-ms-grid;\n  display:grid;\n  -ms-grid-columns: 0.2fr 0.1fr 1fr 0.5fr 1fr;\n      grid-template-columns: 0.2fr 0.1fr 1fr 0.5fr 1fr;\n  border-bottom: 2px solid #222;\n}\n.thead>ul>li:nth-child(1),.files_list>li:nth-child(1){\n  text-align: center;\n}\n.files_list{\n  padding:10px 0 10px 0;\n}\n.thead>ul{background: #eee;}\n.files_list:hover{\nbackground: #777;\ncursor: pointer;\n}\n.f_active{background: #777;}\n.thead>ul>li,.files_list>li{\n  display: inline;\n}\n/*information css*/\n  .prop{\n    -ms-grid-columns: 1fr 0.1fr 1fr;\n        grid-template-columns: 1fr 0.1fr 1fr;\n    border-bottom: 1px solid #222;\n    padding:10px;\n    list-style: none;\n  }\n\n  /*grid css*/\n.file_card{\n  background:  rgb(241, 63, 63);\n  width:200px;\n  height:200px;\n  margin: 10px;\n  border:1px solid #222;\n  text-align: center;\n  box-shadow: 5px 5px 20px #222;\n  display: inline-block;\n}\n.file_card:hover{\n  background: rgb(134, 49, 49);\n  color:#444;\n}\n.thumb{\n  font-size: 4em;\n  margin-top:50px;\n  color:#fff;\n}\n.item_name{\n  margin-top:24px;\n  background: #fff;\n  color:#222;\n\n  padding:9px 0 9px 0;\n}\n @media screen and (max-width:686px){\n   .panel-heading{\n     -ms-grid-columns: 1fr;\n         grid-template-columns: 1fr;\n   }\n   .option{\n    -ms-grid-columns: 0.5fr  0.3fr;\n        grid-template-columns: 0.5fr  0.3fr;\n  }\n }\n\n .dropdown-menu>li{\n   cursor: pointer;\n }\n .form-group{\n   -ms-grid-columns: 1fr 1fr;\n       grid-template-columns: 1fr 1fr;\n   text-align: center;\n }\n/* upload model */\n\n.box_model{\n  position:absolute;\n  background: #222;\n  opacity:0.95;\n  width:auto;\n  min-width: 80vw;\n  top:50px;\n  height:auto;\n  min-height:84vh;\n  padding:40px;\n}\n#pop_box{\n  margin:10% 0 0 30%;\n  width:30vw;\n  background: #222;\n  padding: 10px;\n  color:#fff;\n}\n\n@media screen and (max-width:686px){\n  .box_model{\n    top:468px;\n    min-width:100%;\n    min-height:70vh;\n  }\n  .option{\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashhome/dashhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"page\">\n\n<div class=\"panel panel-default\">\n  <!--//options-->\n  <div class=\"option grid\">\n  <div class=\"panel-body\">\n    <ul class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" ></i>Home</a></li>\n      <li><a href=\"#\">Library</a></li>\n      <li class=\"active\">Data</li>\n    </ul>\n  </div>\n\n  <div class=\"loptions\"  >\n      <div class=\"btn-group\">\n          <a class=\"btn btn-primary\">More Options</a>\n          <a class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\"><i class=\"fa fa-ellipsis-v\" ></i></a>\n          <ul class=\"dropdown-menu\">\n              <li (click)=\"show_ubox()\"><a>Upload Files</a></li>\n            \n            <li class=\"divider\"></li>\n            <li  (click)=\"show_cfbox()\"><a>Create Folder</a></li>\n          </ul>\n        </div>\n  </div>\n  \n  <div class=\"loptions\" *ngIf=\"currfile\">\n      <ul class=\"options\">  \n          <li><a href=\"{{currfile.dlink}}\" target=\"_blank\"><i class=\"fa fa-eye\"></i></a></li>\n          <li><i class=\"fa fa-share-alt\" ></i></li>\n          <li ><a href=\"{{currfile.dlink}}\" target=\"_blank\"><i class=\"fa fa-download\" ></i></a></li>\n          <li (click)=\"info_on()\"><i class=\"fa fa-info-circle\" ></i></li>\n          <li><i class=\"fa fa-trash\" ></i></li>\n        </ul>\n  </div>\n  <div  class=\"loptions\" *ngIf=\"!currfile\"></div>\n  <div class=\"lmenu\">\n      <ul class=\"options\">\n          <li *ngIf=\"list\" (click)=\"viewG()\"><i class=\"fa fa-th\" ></i></li>  \n          <li *ngIf=\"grid\" (click)=\"viewL()\"><i class=\"fa fa-list\" ></i></li>         \n          <li><i class=\"fa fa-ellipsis-v\" ></i></li>\n        </ul>\n\n  </div>\n</div>\n <!-- list view-->\n  <div class=\"panel-body\" *ngIf=\"list\">\n    <ul class=\"ul_table\" >\n      <li class=\"thead\">\n        <ul>\n          <li>#</li>\n          <li></li>\n          <li>Files</li>\n          <li>Size</li>\n            <li>Upload Date</li>\n          </ul>\n        </li>\n\n      <li class=\"tbody\" *ngIf=\"fileData\">\n        <ul class=\"files_list\" *ngFor=\"let file of fileData\" (click)=\"file_clicked(file)\" id=\"#\">\n          <li>{{ count }}</li>\n          <li><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i></li>\n            <li> {{file.name}}</li>\n              <li>{{ file.size}} &nbsp;bytes</li>\n                <li>{{ file.date }}</li>   \n                  \n          </ul>\n          \n        </li>\n        <li class=\"tbody\" *ngIf=\"!fileData\">\n            <ul class=\"\">\n              <li>No Files !</li>  \n              </ul>\n            </li>\n        </ul>\n  </div>\n\n  <!-- grid view-->\n  <div class=\"panel-body\" *ngIf=\"grid\">\n     <div class=\"file_card\" *ngFor=\"let file of fileData\" (click)=\"file_clicked(file)\">\n          <div class=\"thumb\">\n            <i class=\"fas fa-image\"></i>\n          </div>\n          <div class=\"item_name\">\n              {{ file.name}}\n          </div>\n     </div>\n  </div>\n\n\n</div>\n<!-- upload model -->\n<div class=\"box_model\" *ngIf=\"box\">\n\n  <div class=\"panel panel-primary btn-file\" id=\"pop_box\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Upload File\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"boxclose()\">&times;</button>\n      </h3>\n    </div>\n    <div class=\"panel-body form_box\">\n      <form action=\"/uploadfile\" method=\"POST\" enctype=\"multipart/form-data\">\n      <label class=\"btn btn-default\">\n        BrowseFile <input type=\"file\" name=\"file\">\n    </label><br><br>\n    <input type=\"submit\" class=\"btn btn-success\" value=\"upload\">\n    </form>\n    </div>\n  </div>\n</div>\n<!--create folder -->\n<div class=\"box_model\" *ngIf=\"cfbox\">\n    <div class=\"panel panel-primary btn-file\" id=\"pop_box\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Create Folder\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"cfboxclose()\">&times;</button>\n        </h3>\n      </div>\n      <div class=\"panel-body form_box\">\n        <form action=\"/uploadfile\" method=\"POST\" enctype=\"multipart/form-data\">\n          <div class=\"form-group grid\">\n              <label>Folder Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fname\" name=\"fname\" >\n            </div>\n            <div class=\"form-group grid\">\n                <a></a>\n               <input type=\"submit\" class=\"btn btn-success\" value=\"Create Folder\">\n             </div>\n      </form>\n      </div>\n    </div>\n  </div>\n\n\n<!--side info-->\n\n<div class=\"panel panel-default\" *ngIf=\"finfo\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">File info\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"info_close()\">&times;</button>\n      </h3>\n    </div>\n    <div class=\"info_box\"  *ngIf=\"currfile\">\n      <ul class=\"grid prop\">\n        <li>Name</li>\n        <li>:</li>\n        <li>{{currfile.name}}</li>\n      </ul>\n      <ul class=\"grid prop\">\n          <li>Size</li>\n          <li>:</li>\n          <li>{{currfile.name}}</li>\n        </ul>\n        <ul class=\"grid prop\">\n            <li>Upload Date</li>\n            <li>:</li>\n           <li>{{currfile.date}}</li>\n          </ul>\n          <ul class=\"grid prop\">\n              <li>Category</li>\n              <li>:</li>\n             <li>{{currfile.cat}}</li>\n            </ul>\n            <ul class=\"grid prop\">\n                <li>property</li>\n                <li>:</li>\n                <li>{{currfile.name}}</li>\n              </ul>\n          </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashhome/dashhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashhomeComponent = (function () {
    function DashhomeComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
        this.box = false;
        this.cfbox = false;
        this.finfo = false;
        this.list = false;
        this.grid = true;
    }
    DashhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listFiles().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    DashhomeComponent.prototype.download = function (file) {
        console.log(file.dlink);
    };
    DashhomeComponent.prototype.show_ubox = function () {
        this.box = true;
    };
    DashhomeComponent.prototype.boxclose = function () {
        this.box = false;
    };
    //cfolder
    DashhomeComponent.prototype.show_cfbox = function () {
        this.cfbox = true;
    };
    DashhomeComponent.prototype.cfboxclose = function () {
        this.cfbox = false;
    };
    //information page
    DashhomeComponent.prototype.info_on = function () {
        this.divToChange = document.getElementById('page');
        this.divToChange.setAttribute("class", "hbody grid");
        this.finfo = true;
    };
    DashhomeComponent.prototype.info_close = function () {
        this.finfo = false;
        this.divToChange.removeAttribute("class");
    };
    //file clicked
    DashhomeComponent.prototype.file_clicked = function (file) {
        this.currfile = file;
    };
    DashhomeComponent.prototype.viewG = function () {
        this.list = false;
        this.grid = true;
    };
    DashhomeComponent.prototype.viewL = function () {
        this.grid = false;
        this.list = true;
    };
    DashhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashhome',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashhome/dashhome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashhome/dashhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], DashhomeComponent);
    return DashhomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/documents/documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title center\">Documents</h3>\n  </div>\n\n\n  <!-- table -->\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Documents</th>\n        <th>Size</th>\n        <th>Upload Date</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"fileData\">\n      <tr class=\"\" *ngFor=\"let file of fileData\" >\n        <td>{{ count }}</td>\n        <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n        <td>{{ file.size}} &nbsp;bytes</td>\n        <td>{{ file.date }}</td>\n        <td><a (click)=\"download(file)\" class=\"btn btn-primary\">download</a></td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"!fileData\">\n        <tr><td></td>\n          <td>No Files !</td>\n        </tr>\n      </tbody>\n\n    </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsComponent = (function () {
    function DocumentsComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listFiles().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    DocumentsComponent.prototype.download = function (file) {
        console.log(file.dlink);
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__("../../../../../src/app/components/dashboard/documents/documents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n  background: #eee;\n  overflow-y: scroll;\n}\n.dashboard>h2{\n  margin-left:20px;\n}\n.dashboard>hr{\n  border-bottom:2px solid #333;\n}\n\n/*extra*/\n.dash-items{\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n  margin:20px 20% 0 20%;\n  background:#dde;\n  border-radius: 20px;\n}\n.items {\n  display:-ms-grid;\n  display:grid;\n  padding:10px;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 10px;\n}\n.icon>i{\n  display:block;\n  color:rgb(250, 241, 241);\n  text-align: center;\n  font-size: 3em;\n  margin-top: 20px;\n}\n.icon{\n  border-radius: 50%;\n  background: #F0536C;\n  width:100px;\n  height:100px;\n}\n.storage{\n  margin:20px 20% 0 20%;\n}\n.progress{\n  height:30px;\n  border:1px solid #222;\n  border-radius: 20px;\n  position:relative;\n}\n.progress-bar{\n  font-size:1.2em;\n  text-align: center;\n  margin:0;\n  padding:20px;\n\n}\n.progress-bar>label{\nposition:absolute;\ntop:10px;\ncolor:#222;\n}\n\n/*media query\n*/\n@media screen and (max-width:986px)\n{\n  .dash-items{\n       -ms-grid-columns: 1fr 1fr 1fr;\n           grid-template-columns: 1fr 1fr 1fr;\n       margin:0;\n       margin-left:10px;\n  }\n \n}\n@media screen and (max-width:720px)\n{\n  .dash-items{\n       -ms-grid-columns: 1fr 1fr;\n           grid-template-columns: 1fr 1fr;\n       margin-left:10px;\n  }\n  .storage{\n    margin:0;\n    margin-top:20px;\n    margin-left:10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dashboard\">\n  <h2>DashBoard</h2>\n  <hr>\n   <div class=\"grid dash-items\">\n\n     <div class=\"items\">\n         <div class=\"icon\">\n            <i class=\"fas fa-file\"></i>\n         </div>\n        <label>Documents</label>\n        <label>Size : {{doc_size}} MB</label>\n     </div>\n\n     <div class=\"items placeholder\">\n            <div class=\"icon\">\n                    <i class=\"fas fa-image\"></i>\n                 </div>\n         <label>image</label>\n         <label>Size : {{img_size}} MB</label>\n      </div>\n\n      <div class=\"items placeholder\">\n            <div class=\"icon\">\n                    <i class=\"fas fa-music\"></i>\n                 </div>\n           <label>audios</label>\n           <label>Size : {{audio_size}} MB</label>\n        </div>\n\n        <div class=\"items placeholder\">\n                <div class=\"icon\">\n                        <i class=\"fas fa-film\"></i>\n                     </div>\n             <label>videos</label>\n             <label>Size : {{video_size}} MB</label>\n          </div>\n\n          <div class=\"items placeholder\">\n                <div class=\"icon\">\n                        <i class=\"fas fa-archive\"></i>\n                     </div>\n               <label>archeives</label>\n               <label>Size : {{arch_size}} MB</label>\n            </div>\n\n            <div class=\"items placeholder\">\n                    <div class=\"icon\">\n                            <i class=\"fas fa-folder\"></i>\n                         </div>\n                 <label>others</label>\n                 <label>Size : {{other_size}} MB</label>\n              </div>\n\n  </div>\n  <!-- end of grid items-->\n  <div class=\"storage\">\n      <div class=\"progress\">\n\n          <div class=\"progress-bar progress-bar-warning\" style=\"width:60%\">\n              <label>storage 5gb/15gb</label>\n          </div>\n\n        </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriveinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriveinfoComponent = (function () {
    function DriveinfoComponent() {
        this.doc_size = 40;
        this.img_size = 50;
        this.audio_size = 80;
        this.video_size = 100;
        this.arch_size = 50;
        this.other_size = 0;
    }
    DriveinfoComponent.prototype.ngOnInit = function () {
    };
    DriveinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-driveinfo',
            template: __webpack_require__("../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/driveinfo/driveinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriveinfoComponent);
    return DriveinfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/images/images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n  overflow-y:scroll;\n  max-height: 83vh;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/images/images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n<div class=\"panel-heading\">\n  <h3 class=\"panel-title center\">Images</h3>\n</div>\n\n\n<!-- table -->\n<table class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Images</th>\n      <th>Size</th>\n      <th>Upload Date</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"fileData\">\n      <tr class=\"\" *ngFor=\"let file of fileData\">\n        <td>{{ count }}</td>\n        <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n        <td>{{ file.size}} &nbsp;bytes</td>\n        <td>{{ file.date }}</td>        \n        <td>\n          <a (click)=\"download(file)\" ><i class=\"fas fa-download\"></i></a><span></span>\n          <a (click)=\"download(file)\" ><i class=\"fas fa-share-alt\"></i></a>\n        </td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"!fileData\">\n        <tr><td></td>\n          <td>No Files !</td>\n        </tr>\n      </tbody>\n\n    </table>\n<!-- table -->\n\n<ul class=\"pagination\">\n  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n  <li class=\"active\"><a href=\"#\">1</a></li>\n  <li><a href=\"#\">2</a></li>\n  <li><a href=\"#\">3</a></li>\n  <li><a href=\"#\">4</a></li>\n  <li><a href=\"#\">5</a></li>\n  <li><a href=\"#\">&raquo;</a></li>\n</ul>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/images/images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagesComponent = (function () {
    function ImagesComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listImages().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    ImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-images',
            template: __webpack_require__("../../../../../src/app/components/dashboard/images/images.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/others/others.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/others/others.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title center\">Others</h3>\n  </div>\n\n\n  <!-- table -->\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Unknown</th>\n        <th>Size</th>\n        <th>Upload Date</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"fileData\">\n        <tr class=\"\" *ngFor=\"let file of fileData\">\n          <td>{{ count }}</td>\n          <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n          <td>{{ file.size}} &nbsp;bytes</td>\n          <td>{{ file.date }}</td>        \n          <td>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-download\"></i></a><span></span>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-share-alt\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!fileData\">\n          <tr><td></td>\n            <td>No Files !</td>\n          </tr>\n        </tbody>\n\n\n    </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/others/others.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OthersComponent = (function () {
    function OthersComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    OthersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listFiles().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    OthersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-others',
            template: __webpack_require__("../../../../../src/app/components/dashboard/others/others.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/others/others.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], OthersComponent);
    return OthersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title center\">Videos</h3>\n  </div>\n\n\n  <!-- table -->\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Videos</th>\n        <th>Size</th>\n        <th>Upload Date</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"fileData\">\n        <tr class=\"\" *ngFor=\"let file of fileData\">\n          <td>{{ count }}</td>\n          <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n          <td>{{ file.size}} &nbsp;bytes</td>\n          <td>{{ file.date }}</td>        \n          <td>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-download\"></i></a><span></span>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-share-alt\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!fileData\">\n          <tr><td></td>\n            <td>No Files !</td>\n          </tr>\n        </tbody>\n\n\n    </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideosComponent = (function () {
    function VideosComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listVideos().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/components/dashboard/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/zips/zips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/zips/zips.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title center\">Archives</h3>\n  </div>\n\n\n  <!-- table -->\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Archive</th>\n        <th>Size</th>\n        <th>Upload Date</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"fileData\">\n        <tr class=\"\" *ngFor=\"let file of fileData\">\n          <td>{{ count }}</td>\n          <td><i class=\"fas fa-{{file.cat}} file-icons\" aria-hidden=\"true\"></i>{{ file.name}}</td>\n          <td>{{ file.size}} &nbsp;bytes</td>\n          <td>{{ file.date }}</td>        \n          <td>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-download\"></i></a><span></span>\n            <a (click)=\"download(file)\" ><i class=\"fas fa-share-alt\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!fileData\">\n          <tr><td></td>\n            <td>No Files !</td>\n          </tr>\n        </tbody>\n\n\n    </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/zips/zips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZipsComponent = (function () {
    function ZipsComponent(fileService) {
        this.fileService = fileService;
        this.count = 1;
    }
    ZipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.listFiles().subscribe(function (data) {
            _this.fileData = data;
            if (_this.fileData.length > 0) {
                console.log(_this.fileData);
            }
        });
    };
    ZipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zips',
            template: __webpack_require__("../../../../../src/app/components/dashboard/zips/zips.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/zips/zips.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]])
    ], ZipsComponent);
    return ZipsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n  height:10%;\n  background:#333;\n  text-align: center;\n  color:#fff;\n\n\n}\nfooter > p{\n padding:20px 0 0 0 ;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>copyright&copy;SkyCloud.com.2018</p>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#showcase{\n  text-align: center;\n  height:100vh;\n  color:#fff;\n}\n#text{\n  margin-top:20%;\n}\nspan{\n  padding:5px;\n}\n#features{\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  padding:20px;\n  background:  #2780E3;\n  height:auto;\n  text-align: center;\n  border-bottom: 5px solid #333;\n}\n.card{\n  margin:2px;\n   border: 1px solid #0bf;\n   background:#fff;\n   color:#000;\n}\n.card>h1{\n  border-bottom:2px solid #2780E3;\n\n}\n.card-box{\n\n\n}\n#demos{\n   -ms-grid-columns: 1fr;\n       grid-template-columns: 1fr;\n    background: #2780E3;\n\n    padding:20px;\n}\n.card1{\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  text-align: center;\n  padding:20px;\n  background:#fff;\n  margin:2px;\n}\n.imagebox{\n  width:80%;\n  height:100%;;\n}\n.card1-box{\n  margin-top:5%;\n}\n@media screen and (max-width:800px)\n{\n  #features{\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n.card1{\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .head{\n  background: url(./assets/background.jpg) no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  }\n</style>\n<div class=\"head grid\">\n<div id=\"showcase\" >\n        <div id=\"text\">\n              <h1>SAFE PLACE FOR ALL YOUR DATA </h1>\n        </div>\n    <div id=\"buttons\">\n      <a class=\"btn btn-success\" [routerLink]=\"['/register']\">Register</a>\n      <span></span>\n      <a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n</div>\n</div>\n\n    <div id=\"features\" class=\"grid\">\n          <div class=\"card\">\n               <h1>Data Storage</h1>\n               <div class=\"card-box\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio.\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea\n                  maxime natus eligendi, consequuntur harum reiciendis expedita? Suscipit i\n                  psum minima animi quod aperiam? Voluptatum fugit facere expedita aspernatur\n                  reprehenderit, voluptatibus obcaecati, dicta illo veniam quis reiciendis aliquid\n                  perspiciatis, aliquam nostrum!\n               </div>\n            </div>\n               <div class=\"card\">\n                <h1>Data Protection</h1>\n                <div class=\"card-box\">\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio.\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea\n                    maxime natus eligendi, consequuntur harum reiciendis expedita? Suscipit i\n                    psum minima animi quod aperiam? Voluptatum fugit facere expedita aspernatur\n                    reprehenderit, voluptatibus obcaecati, dicta illo veniam quis reiciendis aliquid\n                    perspiciatis, aliquam nostrum!\n                </div>\n           </div>\n\n           <div class=\"card\">\n            <h1>Data Encryption</h1>\n\n            <div class=\"card-box\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio.\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea\n                maxime natus eligendi, consequuntur harum reiciendis expedita? Suscipit i\n                psum minima animi quod aperiam? Voluptatum fugit facere expedita aspernatur\n                reprehenderit, voluptatibus obcaecati, dicta illo veniam quis reiciendis aliquid\n                perspiciatis, aliquam nostrum!\n            </div>\n       </div>\n       </div>\n\n <div id=\"demos\" class=\"grid\">\n      <div class=\"card1 grid\">\n        <div>\n        <img src=\"../../../assets/images/image3.jpeg\" alt=\"product\"  class=\"imagebox\">\n      </div>\n        <div class=\"card1-box\">\n            <h2>We Offres you</h2>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Optio nesciunt qui inventore sunt! Dolore quia, deleniti ipsam,\n            laudantium ut provident expedita asperiores incidunt assumenda\n            error quas et illum, eius quod vitae eaque nobis aspernatur. Ipsam\n            repellat obcaecati enim quibusdam deserunt repudiandae cum neque,\n            ipsum fuga autem suscipit ipsa repellendus quisquam?</p>\n        </div>\n     </div>\n\n      <div class=\"card1 grid\">\n        <div><img src=\"../../../assets/images/image5.jpeg\" alt=\"product\"  class=\"imagebox\"></div>\n        <div class=\"card1-box\">\n            <h2>We Offres you</h2>\n          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n          Optio nesciunt qui inventore sunt! Dolore quia, deleniti ipsam,\n          laudantium ut provident expedita asperiores incidunt assumenda\n          error quas et illum, eius quod vitae eaque nobis aspernatur. Ipsam\n          repellat obcaecati enim quibusdam deserunt repudiandae cum neque,\n          ipsum fuga autem suscipit ipsa repellendus quisquam?</p>\n        </div>\n     </div>\n\n\n      <div class=\"card1 grid\">\n        <div><img src=\"../../../assets/images/image1.jpeg\" alt=\"product\"  class=\"imagebox\"></div>\n        <div class=\"card1-box\">\n          <h2>We Offres you</h2>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n            Optio nesciunt qui inventore sunt! Dolore quia, deleniti ipsam,\n            laudantium ut provident expedita asperiores incidunt assumenda\n            error quas et illum, eius quod vitae eaque nobis aspernatur. Ipsam\n            repellat obcaecati enim quibusdam deserunt repudiandae cum neque,\n            ipsum fuga autem suscipit ipsa repellendus quisquam?\n        </div>\n     </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dhome',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form{\n  background:#2780E3;\n\n}  \n.form-group {\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  text-align: center;\n  padding:0 20px 0 20px;\n}\n.form-group>a:nth-child(1){\n  color:#0f0;;\n}\n.box{\n   height:80vh;\n   padding:10px 30%  5% 30%;\n   margin-top:50px;\n   background:#2780E3;\n   color:#fff;\n\n}\n.box>h2{\n  margin:0;\n  padding:0;\n  text-align: center;\n}\nhr{\n\nborder:2px solid #0fb;\nbackground: #0fb;\n}\n.sbutton{\n  text-align: center;\n}\n.form-control{\n  height:30px !important;\n}\nlabel{\n  margin-top:5px;\n}\n.terms{\n  -ms-grid-columns: 0.1fr 0.1fr 1fr;\n      grid-template-columns: 0.1fr 0.1fr 1fr;\n  padding: 10px 0 10px 60px;\n}\n\n@media screen and (max-width:800px){\n  .form-group{\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n  }\n  .box{\n    margin-top:10px;\n    padding:0;\n    width:100vw;\n    height:80vh;\n  }\n  .terms{\n    margin-left:30px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form grid\">\n<div class=\"box\">\n<h2>Login  Form</h2>\n<hr>\n<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"error\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</button>\n  <strong> {{ errmsg }} </strong> .\n</div>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group grid\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" (click)=\"close()\">\n\n  </div>\n\n  <div class=\"form-group grid\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\"  (click)=\"close()\">\n  </div>\n\n  <div class=\"form-group grid\">\n   <a href=\"#\">Forgot password ?</a>\n  <input type=\"submit\" class=\"btn btn-default\" value=\"Login\">\n</div>\n<hr>\n<div class=\"form-group grid\">\n    <label>Not Registred ?</label>\n    <a class=\"btn btn-warning\" [routerLink]=\"['/register']\">Register</a>\n  </div>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, validateService, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.username = "";
        this.password = "";
        this.errmsg = "";
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.error = true;
            this.errmsg = "Username And Password required !";
        }
        else if (!this.validateService.validateLoginUser(user.username)) {
            this.error = true;
            this.errmsg = "Username  required !";
        }
        else if (!this.validateService.validateLoginPass(user.password)) {
            this.error = true;
            this.errmsg = "Password  required !";
        }
        else {
            console.log(user);
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    console.log('failed to login');
                }
            });
        }
    };
    LoginComponent.prototype.close = function () {
        this.error = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed{\n   position:fixed;\n    width:100%;\n    top:0;\n    margin: 0;\n  box-shadow: 0px 0px 60px #000;\n  \n}\n#logo{\n  color: rgb(236, 237, 243);\n  font-size: 1.6em;\n  text-shadow:2px 3px 7px rgb(19, 18, 18);\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse fixed\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\"><label id=\"logo\">SkyCloud</label></a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/features']\">Features</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">AboutUs</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n\n            <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                Profile <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n              </ul>\n            </li>\n\n          </ul>\n\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  hello\n</div>\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form{\n  width:100%;\n  background:#2780E3;\n}\n.form-group {\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  text-align: center;\n  padding:0 20px 0 20px;\n}\n.box{\n   height:auto;\n   padding:10px 20%  5% 20%;\n\n   background:#2780E3;\n   color:#fff;\n}\n.box>h2{\n  margin:0;\n  padding:0;\n  text-align: center;\n}\n.form-box{\n  padding:0 50px 0 50px;\n}\nhr{\nborder:2px solid #0bf;\nbackground: #0bf;\n}\n.sbutton{\n  text-align: center;\n}\n.form-control{\n  height:30px !important;\n}\nlabel{\n  margin-top:5px;\n}\n.terms{\n  -ms-grid-columns: 0.1fr 0.1fr 1fr;\n      grid-template-columns: 0.1fr 0.1fr 1fr;\n  padding: 10px 0 10px 60px;\n  margin-left:30%;\n\n}\n.terms>a{\n  color:#000;\n  text-indent: 5px;\n  cursor: pointer;\n}\n@media screen and (max-width:800px){\n  .form-group{\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n  }\n  .box{\n    margin-top:10px;\n    padding:0;\n    width:100%;\n    height:100%;\n  }\n  .form-box{\n    padding:0;\n  }\n\n}\n\n\n.alert{\n  text-align: center;\n\n}\n#terms-condition{\n  position:absolute;\n top:0;\n  background: #222;\n  opacity:0.95;\n  width:100%;\n  height:100%;\n}\n.terms-box{\npadding:100px 400px;\n\n\n}\n.panel-body{\n  height:400px;\n  overflow-y: scroll;\n}\n.panel-title{\n  text-align: center;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reg-form grid\">\n<div class=\"box\">\n<h2 >Register</h2>\n<hr>\n<div class=\"alert alert-dismissible alert-warning\" *ngIf=\"error\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</button>\n  <strong>{{ errmsg }}</strong>  &nbsp;and try submitting again.\n</div>\n<div class=\"form-box\">\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group grid\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group grid\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group grid\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group grid\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group grid\">\n      <label>Confirm-Password</label>\n      <input type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\" class=\"form-control\">\n    </div>\n    <div class=\"terms grid\">\n        <input type=\"checkbox\" [(ngModel)]=\"term\" name=\"term\">\n        <p>Accept </p><a (click)=\"showtbox()\">Terms &  Conditions</a>\n      </div>\n  <div class=\"form-group grid\">\n    <p></p>\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Register\">\n  </div>\n\n</form>\n\n<hr>\n<div class=\"form-group grid\">\n    <label>Already Registred ?</label>\n    <a class=\"btn btn-warning\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n</div>\n</div>\n\n\n<div id=\"terms-condition\" *ngIf=\"tbox\">\n  <div class=\"terms-box\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Terms And Conditions\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"boxclose()\">&times;</button>\n        </h3>\n\n      </div>\n      <div class=\"panel-body\">\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Maxime corporis est non nostrum, molestiae doloribus.\n        Magni odio atque repudiandae ad quod porro eaque, ullam quia\n        quae quasi? Accusamus, aut autem?\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.errmsg = "";
        this.error = false;
        this.tbox = false;
        this.term = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.error = false;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            cpassword: this.cpassword
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.errmsg = " Please fill all fields ";
            this.error = true;
            return false;
        }
        else if (!this.validateService.validateUser(user.username)) {
            this.errmsg = "Not a valid username ";
            this.error = true;
            return false;
        }
        else if (!this.validateService.validateEmail(user.email)) {
            this.errmsg = " Not a valid Email-ID ";
            this.error = true;
            return false;
        }
        else if (!this.validateService.checkPassLen(user.password)) {
            this.errmsg = 'passwords must be of 8 character';
            this.error = true;
            return false;
        }
        else if (!this.validateService.comparePassword(user.password, user.cpassword)) {
            this.errmsg = "passwords does'nt match ";
            this.error = true;
            return false;
        }
        else if (!this.term) {
            this.errmsg = "please accept term's and condition's ";
            this.error = true;
            return false;
        }
        else {
            // Register user
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.router.navigate(['/register']);
                    _this.errmsg = 'failed to register user';
                    _this.error = true;
                }
            });
        }
    };
    RegisterComponent.prototype.showtbox = function () {
        this.tbox = true;
    };
    RegisterComponent.prototype.close = function () {
        this.error = false;
    };
    RegisterComponent.prototype.boxclose = function () {
        this.tbox = false;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    //list all files
    FileService.prototype.listFiles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/filelist');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list images
    FileService.prototype.listImages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listimages');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list audios
    FileService.prototype.listAudios = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listaudios');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list videos
    FileService.prototype.listVideoss = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listvideos');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list docs
    FileService.prototype.listDocs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listdocs');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list audios
    FileService.prototype.listaudios = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listaudios');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list videos
    FileService.prototype.listVideos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listvideos');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list zips
    FileService.prototype.listZips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listzips');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //list others
    FileService.prototype.listOthers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('http://localhost:3000/files/listothres');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FileService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateUser = function (username) {
        var re = /^[A-Za-z\d\W]{3}[\S]+$/;
        return re.test(username);
    };
    ValidateService.prototype.comparePassword = function (pass, cpass) {
        if (pass === cpass)
            return true;
        else
            return false;
    };
    ValidateService.prototype.checkPassLen = function (password) {
        if (password.length <= 8) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === "" && user.password === "") {
            return false;
        }
        else
            return true;
    };
    ValidateService.prototype.validateLoginUser = function (user) {
        if (user == "") {
            return false;
        }
        else
            return true;
    };
    ValidateService.prototype.validateLoginPass = function (pass) {
        if (pass == "") {
            return false;
        }
        else
            return true;
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map