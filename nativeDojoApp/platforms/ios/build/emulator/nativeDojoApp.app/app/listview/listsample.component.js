"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listsample_model_1 = require("./listsample.model");
var page_1 = require("tns-core-modules/ui/page/page");
var swipeDelete = require('tns-core-modules/utils/ios-swipe-delete.js');
var ListSampleComponent = /** @class */ (function () {
    function ListSampleComponent(page) {
        this.page = page;
        var carListView = this.page.getViewById('carListView');
        if (carListView) {
            var iOSListView = carListView.ios;
            swipeDelete.enable(carListView, function (index) {
                this.carsList.delete(index);
            });
        }
    }
    ListSampleComponent.prototype.ngOnInit = function () {
        this.carsList = new Array();
        this.addCars();
    };
    ListSampleComponent.prototype.addCars = function () {
        this.carsList.push(new listsample_model_1.Car("Subaru", "WRX", "Rally Blue", "Sedan"));
        this.carsList.push(new listsample_model_1.Car("Mitsubishi", "Lancer Evolution", "Palma Red", "Sedan"));
        this.carsList.push(new listsample_model_1.Car("Nissan", "Skyline GTR", "Godzilla Gray", "Coupe"));
    };
    ListSampleComponent.prototype.pullToRefresh = function () {
        console.log("Pull to refresh executed");
        this.addCars();
    };
    ListSampleComponent.prototype.onItemTap = function (args) {
        console.log("Tapped on an item");
    };
    ListSampleComponent = __decorate([
        core_1.Component({
            selector: 'ListSample',
            moduleId: module.id,
            templateUrl: './listsample.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ListSampleComponent);
    return ListSampleComponent;
}());
exports.ListSampleComponent = ListSampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNhbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0c2FtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBeUM7QUFDekMsc0RBQTREO0FBQzVELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBUXhFO0lBY0UsNkJBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzNCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpELEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDZCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBa0IsQ0FBQztZQUNuRCxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxVQUFTLEtBQUs7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUdILENBQUM7SUF0QkQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFHLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFrQkQsMkNBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFyQ1UsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDO3lDQWdCeUIsV0FBSTtPQWRsQixtQkFBbUIsQ0FzQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSAnLi9saXN0c2FtcGxlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xudmFyIHN3aXBlRGVsZXRlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91dGlscy9pb3Mtc3dpcGUtZGVsZXRlLmpzJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0xpc3RTYW1wbGUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdHNhbXBsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0U2FtcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwcml2YXRlIGNhcnNMaXN0OiBDYXJbXTtcblxuICBuZ09uSW5pdCgpOnZvaWR7XG4gICAgdGhpcy5jYXJzTGlzdCA9IG5ldyBBcnJheTxDYXI+KCk7XG4gICAgdGhpcy5hZGRDYXJzKCk7XG4gIH1cblxuICBhZGRDYXJzKCk6dm9pZHtcbiAgICB0aGlzLmNhcnNMaXN0LnB1c2gobmV3IENhcihcIlN1YmFydVwiLCBcIldSWFwiLCBcIlJhbGx5IEJsdWVcIiwgXCJTZWRhblwiKSk7XG4gICAgdGhpcy5jYXJzTGlzdC5wdXNoKG5ldyBDYXIoXCJNaXRzdWJpc2hpXCIsIFwiTGFuY2VyIEV2b2x1dGlvblwiLCBcIlBhbG1hIFJlZFwiLCBcIlNlZGFuXCIpKTtcbiAgICB0aGlzLmNhcnNMaXN0LnB1c2gobmV3IENhcihcIk5pc3NhblwiLCBcIlNreWxpbmUgR1RSXCIsIFwiR29kemlsbGEgR3JheVwiLCBcIkNvdXBlXCIpKTtcbiAgfSAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UpIHtcbiAgICBjb25zdCBjYXJMaXN0VmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnY2FyTGlzdFZpZXcnKTtcblxuICAgIGlmKGNhckxpc3RWaWV3KXtcbiAgICAgIGNvbnN0IGlPU0xpc3RWaWV3ID0gY2FyTGlzdFZpZXcuaW9zIGFzIFVJVGFibGVWaWV3O1xuICAgICAgc3dpcGVEZWxldGUuZW5hYmxlKGNhckxpc3RWaWV3LCBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHRoaXMuY2Fyc0xpc3QuZGVsZXRlKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gICAgXG5cblxuICB9XG4gIFxuICBcbiAgXG5cbiAgcHVsbFRvUmVmcmVzaCgpOnZvaWR7XG4gICAgY29uc29sZS5sb2coYFB1bGwgdG8gcmVmcmVzaCBleGVjdXRlZGApO1xuICAgIHRoaXMuYWRkQ2FycygpO1xuICB9XG5cbiAgb25JdGVtVGFwKGFyZ3MpOnZvaWR7XG4gICAgY29uc29sZS5sb2coYFRhcHBlZCBvbiBhbiBpdGVtYCk7XG4gIH1cbn0iXX0=