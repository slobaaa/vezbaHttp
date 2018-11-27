(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h2>Ispis svih kola</h2>\r\n                <ul *ngFor=\"let auto of autos;let i = index\">\r\n                    <li><strong>Model: </strong>{{auto.model}}<br><strong>Cena: </strong>{{auto.cena}}<br><strong>Godiste: </strong>{{auto.god}}<hr>\r\n                        <button class=\"btn btn-primary\" (click)=\"editAuto(auto)\">Edit Book</button>\r\n                        <button class=\"btn btn-warning\" (click)=\"deleteAuto(auto)\">Delete Book</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        <div class=\"col-md-6\">\r\n            <h2>Dodaj nova kola</h2>\r\n            <button class=\"btn btn-primary\" (click)=\"addAuto()\" data-toggle=\"collapse\" data-target=\"#forma\">Dodaj nova kola</button>\r\n            \r\n                        <form (ngSubmit)=\"onPosalji(model.value, cena.value, godiste.value)\" #f=\"ngForm\" >\r\n                        <div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"model\">Model:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"model\" ngModel required name=\"model\" #model=\"ngModel\" [(ngModel)] = \"modelNgModel\">\r\n                                <span class=\"help-block\" *ngIf=\"!model.valid && model.touched\">Unesite validan model</span>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"cena\">Cena:</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"cena\" ngModel required name=\"cena\" #cena=\"ngModel\" min=\"1\" [(ngModel)] = \"cenaNgModel\">\r\n                                <span class=\"help-block\" *ngIf=\"!cena.valid && cena.touched\">Unesite validnu cenu</span>\r\n                            </div>\r\n                            <div class=\"radio\" *ngFor=\"let god of godiste\">\r\n                                    <label>\r\n                                      <input type=\"radio\"\r\n                                      name=\"god\"\r\n                                      \r\n                                      #godiste=\"ngModel\"\r\n                                      ngModel\r\n                                      [value]=\"god\"\r\n                                      [(ngModel)] = \"godNgModel\"/>\r\n                                      {{god}}\r\n                                    </label>\r\n                                </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\r\n                    </form>\r\n                </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoService */ "./src/app/autoService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(autoService) {
        this.autoService = autoService;
        this.auto = {
            model: '',
            cena: '',
            god: ''
        };
        this.godiste = ['mladji od 2005', 'stariji od 2005'];
        this.poslato = false;
        this.editing = false;
        this.event = 'add';
    }
    AppComponent.prototype.onPosalji = function (model, cena, god) {
        this.poslato = true;
        this.auto.model = this.signupForm.value.model;
        this.auto.cena = this.signupForm.value.cena;
        this.auto.god = this.signupForm.value.god;
        var autoSaAddForme = {
            id: this.autos.length,
            model: this.signupForm.value.model,
            cena: this.signupForm.value.cena,
            god: this.signupForm.value.god
        };
        if (this.event === 'add') {
            this.autos.push(autoSaAddForme);
            this.autoService.storeAuto(autoSaAddForme)
                .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    AppComponent.prototype.getAutos = function () {
        var _this = this;
        this.autoService.getAutos()
            .subscribe(function (autos) { return _this.autos = autos; }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getAutos();
    };
    AppComponent.prototype.editAuto = function (auto) {
        this.event = 'edit';
        if (this.event === 'edit') {
            this.editing = true;
            this.auto = auto;
            this.modelNgModel = this.auto.model;
            this.cenaNgModel = this.auto.cena;
            this.godNgModel = this.auto.god;
        }
    };
    AppComponent.prototype.deleteAuto = function (auto) {
        this.autos = this.autos.filter(function (a) { return a !== auto; });
        this.autoService.deleteAuto(auto.id)
            .subscribe(function (response) { return console.log('Auto deleted'); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.addAuto = function () {
        this.event = 'add';
        this.getAutos();
        this.modelNgModel = '';
        this.cenaNgModel = '';
        this.godNgModel = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AppComponent.prototype, "signupForm", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_autoService__WEBPACK_IMPORTED_MODULE_2__["AutoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoService */ "./src/app/autoService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-auto */ "./src/app/in-memory-auto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_auto__WEBPACK_IMPORTED_MODULE_5__["InMemoryAuto"], { dataEncapsulation: false })
            ],
            providers: [_autoService__WEBPACK_IMPORTED_MODULE_2__["AutoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autoService.ts":
/*!********************************!*\
  !*** ./src/app/autoService.ts ***!
  \********************************/
/*! exports provided: AutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoService", function() { return AutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoService = /** @class */ (function () {
    function AutoService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    AutoService.prototype.getAutos = function () {
        return this.httpClient.get('api/autos', {
            headers: this.headers
        });
    };
    AutoService.prototype.storeAuto = function (auto) {
        return this.httpClient.post('api/autos', auto, {
            headers: this.headers
        });
    };
    AutoService.prototype.deleteAuto = function (id) {
        return this.httpClient.delete('api/autos/' + id, {
            headers: this.headers
        });
    };
    AutoService.prototype.editAuto = function (auto) {
        return this.httpClient.put('api/autos', auto, {
            headers: this.headers
        });
    };
    AutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AutoService);
    return AutoService;
}());



/***/ }),

/***/ "./src/app/in-memory-auto.ts":
/*!***********************************!*\
  !*** ./src/app/in-memory-auto.ts ***!
  \***********************************/
/*! exports provided: InMemoryAuto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryAuto", function() { return InMemoryAuto; });
var InMemoryAuto = /** @class */ (function () {
    function InMemoryAuto() {
    }
    InMemoryAuto.prototype.createDb = function () {
        var autos = [];
        return { autos: autos };
    };
    return InMemoryAuto;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sloba\Desktop\Smartinit\Frontend\Domaci\12. 28.10.2018\zadatakHttp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map