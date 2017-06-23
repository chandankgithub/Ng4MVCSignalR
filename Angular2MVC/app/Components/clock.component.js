"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signalRService_1 = require("../Service/signalRService");
// decorator section comprised of selector and view template  
var ClockComponent = (function () {
    // constructor of the class to inject the service in the constuctor and call events.  
    function ClockComponent(_signalRService, _ngZone) {
        var _this = this;
        this._signalRService = _signalRService;
        this._ngZone = _ngZone;
        // this can subscribe for events  
        this.subscribeToEvents();
        // this can check for conenction exist or not.  
        this.canSendMessage = _signalRService.connectionExists;
        // this method call every second to tick and respone tansfered to client.  
        setInterval(function () {
            _this._signalRService.sendTime();
        }, 1000);
    }
    ClockComponent.prototype.subscribeToEvents = function () {
        var _this = this;
        // if connection exists it can call of method.  
        this._signalRService.connectionEstablished.subscribe(function () {
            _this.canSendMessage = true;
        });
        // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
        this._signalRService.messageReceived.subscribe(function (message) {
            debugger;
            _this._ngZone.run(function () {
                _this.allMessages = message;
            });
        });
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    core_1.Component({
        selector: 'clock-component',
        //templateUrl: './clock.component.html'
        template: "<div id=\"timediv\">\n    <p>{{allMessages}}</p>\n</div> "
    }),
    __metadata("design:paramtypes", [signalRService_1.SignalRService, core_1.NgZone])
], ClockComponent);
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map