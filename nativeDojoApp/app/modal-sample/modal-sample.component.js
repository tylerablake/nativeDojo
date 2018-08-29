"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var datepicker_modal_component_1 = require("../modals/datepicker/datepicker-modal.component");
var ModalSampleComponent = /** @class */ (function () {
    function ModalSampleComponent(viewContainerRef, modalService) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
    }
    ModalSampleComponent.prototype.onDateTap = function () {
        var _this = this;
        var options = {
            context: this.date == null ? new Date() : this.date,
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(datepicker_modal_component_1.DatepickerModalComponent, options).then(function (dialogResult) {
            _this.date = dialogResult;
        });
    };
    ModalSampleComponent = __decorate([
        core_1.Component({
            selector: 'ModalSample',
            moduleId: module.id,
            templateUrl: "./modal-sample.component.html"
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef, modal_dialog_1.ModalDialogService])
    ], ModalSampleComponent);
    return ModalSampleComponent;
}());
exports.ModalSampleComponent = ModalSampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtc2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXNhbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQTJGO0FBQzNGLDhGQUEyRjtBQU8zRjtJQUlFLDhCQUFZLGdCQUFrQyxFQUFFLFlBQStCO1FBQzdFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbkQsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscURBQXdCLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBZ0I7WUFDaEYsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkJVLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzt5Q0FLOEIsdUJBQWdCLEVBQWUsaUNBQWtCO09BSnBFLG9CQUFvQixDQW9CaEM7SUFBRCwyQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWxzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdNb2RhbFNhbXBsZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9tb2RhbC1zYW1wbGUuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2FtcGxlQ29tcG9uZW50IHtcbiAgICBkYXRlOkRhdGU7XG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWY7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZTtcbiAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgbW9kYWxTZXJ2aWNlOk1vZGFsRGlhbG9nU2VydmljZSkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gbW9kYWxTZXJ2aWNlO1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG4gIH1cblxuICBvbkRhdGVUYXAoKTp2b2lke1xuICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgY29udGV4dDogdGhpcy5kYXRlID09IG51bGwgPyBuZXcgRGF0ZSgpIDogdGhpcy5kYXRlLFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXRlcGlja2VyTW9kYWxDb21wb25lbnQsb3B0aW9ucykudGhlbigoZGlhbG9nUmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IGRpYWxvZ1Jlc3VsdDsgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB9KTtcbiAgfVxufSJdfQ==