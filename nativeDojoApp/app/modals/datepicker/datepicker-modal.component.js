"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DatepickerModalComponent = /** @class */ (function () {
    function DatepickerModalComponent(params) {
        this.params = params;
        this.date = params.context;
    }
    DatepickerModalComponent.prototype.onDoneTap = function () {
        this.params.closeCallback(this.date);
    };
    DatepickerModalComponent = __decorate([
        core_1.Component({
            selector: 'DatepickerModal',
            moduleId: module.id,
            templateUrl: "./datepicker-modal.component.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DatepickerModalComponent);
    return DatepickerModalComponent;
}());
exports.DatepickerModalComponent = DatepickerModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxrRUFBc0U7QUFPdEU7SUFHRSxrQ0FBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFUVyx3QkFBd0I7UUFMckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQzt5Q0FJNEIsZ0NBQWlCO09BSGpDLHdCQUF3QixDQVVyQztJQUFELCtCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVmEsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0RhdGVwaWNrZXJNb2RhbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyAgRGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50e1xuICAgIGRhdGU6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgIHRoaXMuZGF0ZSA9IHBhcmFtcy5jb250ZXh0O1xuICB9XG5cbiAgb25Eb25lVGFwKCk6dm9pZHtcbiAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5kYXRlKTtcbiAgfSAgXG59Il19