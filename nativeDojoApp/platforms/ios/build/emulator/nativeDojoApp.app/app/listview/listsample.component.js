"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listsample_model_1 = require("./listsample.model");
var page_1 = require("tns-core-modules/ui/page/page");
// var swipeDelete = require('tns-core-modules/utils/ios-swipe-delete.js');
var ListSampleComponent = /** @class */ (function () {
    function ListSampleComponent(page) {
        this.page = page;
        var carListView = this.page.getViewById('carListView');
        if (page_1.isIOS) {
            //How to record Audio with AVAudioSession
            //Access app's singleton audio session instance
            var audioSession_1 = AVAudioSession.sharedInstance();
            //Get User permission to record
            if (audioSession_1.respondsToSelector('requestRecordPermission:')) {
                AVAudioSession.sharedInstance().requestRecordPermission(function (granted) {
                    if (granted) {
                        console.log('Record Permission Granted!');
                        //Configure AudioSession
                        //audioSession.category = AVAudioSessionCategoryPlayAndRecord; 
                        console.log(audioSession_1);
                    }
                    else {
                        console.log('Record Permission DENIED!');
                    }
                });
            }
            //Access Microphone
            //var iosListView = carListView.ios as UITableView;
            //var iosListView = carListView.ios as UITableView;
            //iosListView.separatorColor = UIColor.redColor;
            //iosListView.showsVerticalScrollIndicator = false;
            //iosListView.showsHorizontalScrollIndicator = true;
            // swipeDelete.enable(carListView, function(index){
            //   this.carsList.delete(index);
            // });
            //carListView.ios.separatorColor = UIColor.redColor;
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
        this.addCars();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNhbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0c2FtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBeUM7QUFDekMsc0RBQXNFO0FBQ3RFLDJFQUEyRTtBQVEzRTtJQWNFLDZCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQWEsQ0FBQztRQVFyRSxFQUFFLENBQUEsQ0FBQyxZQUFLLENBQUMsQ0FBQSxDQUFDO1lBRVIseUNBQXlDO1lBRXpDLCtDQUErQztZQUMvQyxJQUFJLGNBQVksR0FBa0IsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWxFLCtCQUErQjtZQUMvQixFQUFFLENBQUEsQ0FBQyxjQUFZLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzlELGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFDLE9BQWU7b0JBQ3RFLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUMxQyx3QkFBd0I7d0JBQ3hCLCtEQUErRDt3QkFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLENBQUMsQ0FBQTtvQkFDM0IsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQzNDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBVUQsbUJBQW1CO1lBU25CLG1EQUFtRDtZQUNuRCxtREFBbUQ7WUFDbkQsZ0RBQWdEO1lBQ2hELG1EQUFtRDtZQUNuRCxvREFBb0Q7WUFDcEQsbURBQW1EO1lBQ25ELGlDQUFpQztZQUNqQyxNQUFNO1lBQ04sb0RBQW9EO1FBQ3RELENBQUM7SUFHSCxDQUFDO0lBdkVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBRyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFHLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBbUVELDJDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXZGVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7eUNBZ0J5QixXQUFJO09BZGxCLG1CQUFtQixDQXdGL0I7SUFBRCwwQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXIgfSBmcm9tICcuL2xpc3RzYW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSwgaXNJT1MsIFZpZXdCYXNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuLy8gdmFyIHN3aXBlRGVsZXRlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91dGlscy9pb3Mtc3dpcGUtZGVsZXRlLmpzJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0xpc3RTYW1wbGUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdHNhbXBsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0U2FtcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwcml2YXRlIGNhcnNMaXN0OiBDYXJbXTtcblxuICBuZ09uSW5pdCgpOnZvaWR7XG4gICAgdGhpcy5jYXJzTGlzdCA9IG5ldyBBcnJheTxDYXI+KCk7XG4gICAgdGhpcy5hZGRDYXJzKCk7XG4gIH1cblxuICBhZGRDYXJzKCk6dm9pZHtcbiAgICB0aGlzLmNhcnNMaXN0LnB1c2gobmV3IENhcihcIlN1YmFydVwiLCBcIldSWFwiLCBcIlJhbGx5IEJsdWVcIiwgXCJTZWRhblwiKSk7XG4gICAgdGhpcy5jYXJzTGlzdC5wdXNoKG5ldyBDYXIoXCJNaXRzdWJpc2hpXCIsIFwiTGFuY2VyIEV2b2x1dGlvblwiLCBcIlBhbG1hIFJlZFwiLCBcIlNlZGFuXCIpKTtcbiAgICB0aGlzLmNhcnNMaXN0LnB1c2gobmV3IENhcihcIk5pc3NhblwiLCBcIlNreWxpbmUgR1RSXCIsIFwiR29kemlsbGEgR3JheVwiLCBcIkNvdXBlXCIpKTtcbiAgfSAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UpIHtcbiAgICBjb25zdCBjYXJMaXN0VmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnY2FyTGlzdFZpZXcnKSBhcyBWaWV3QmFzZTtcblxuXG5cblxuXG5cblxuICAgIGlmKGlzSU9TKXtcblxuICAgICAgLy9Ib3cgdG8gcmVjb3JkIEF1ZGlvIHdpdGggQVZBdWRpb1Nlc3Npb25cblxuICAgICAgLy9BY2Nlc3MgYXBwJ3Mgc2luZ2xldG9uIGF1ZGlvIHNlc3Npb24gaW5zdGFuY2VcbiAgICAgIGxldCBhdWRpb1Nlc3Npb246QVZBdWRpb1Nlc3Npb24gPSBBVkF1ZGlvU2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xuXG4gICAgICAvL0dldCBVc2VyIHBlcm1pc3Npb24gdG8gcmVjb3JkXG4gICAgICBpZihhdWRpb1Nlc3Npb24ucmVzcG9uZHNUb1NlbGVjdG9yKCdyZXF1ZXN0UmVjb3JkUGVybWlzc2lvbjonKSl7XG4gICAgICAgIEFWQXVkaW9TZXNzaW9uLnNoYXJlZEluc3RhbmNlKCkucmVxdWVzdFJlY29yZFBlcm1pc3Npb24oKGdyYW50ZWQ6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmKGdyYW50ZWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZCBQZXJtaXNzaW9uIEdyYW50ZWQhJyk7XG4gICAgICAgICAgICAvL0NvbmZpZ3VyZSBBdWRpb1Nlc3Npb25cbiAgICAgICAgICAgIC8vYXVkaW9TZXNzaW9uLmNhdGVnb3J5ID0gQVZBdWRpb1Nlc3Npb25DYXRlZ29yeVBsYXlBbmRSZWNvcmQ7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coYXVkaW9TZXNzaW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZCBQZXJtaXNzaW9uIERFTklFRCEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuXG5cblxuXG5cblxuXG4gICAgICAvL0FjY2VzcyBNaWNyb3Bob25lXG5cblxuXG5cblxuXG5cblxuICAgICAgLy92YXIgaW9zTGlzdFZpZXcgPSBjYXJMaXN0Vmlldy5pb3MgYXMgVUlUYWJsZVZpZXc7XG4gICAgICAvL3ZhciBpb3NMaXN0VmlldyA9IGNhckxpc3RWaWV3LmlvcyBhcyBVSVRhYmxlVmlldztcbiAgICAgIC8vaW9zTGlzdFZpZXcuc2VwYXJhdG9yQ29sb3IgPSBVSUNvbG9yLnJlZENvbG9yO1xuICAgICAgLy9pb3NMaXN0Vmlldy5zaG93c1ZlcnRpY2FsU2Nyb2xsSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAvL2lvc0xpc3RWaWV3LnNob3dzSG9yaXpvbnRhbFNjcm9sbEluZGljYXRvciA9IHRydWU7XG4gICAgICAvLyBzd2lwZURlbGV0ZS5lbmFibGUoY2FyTGlzdFZpZXcsIGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIC8vICAgdGhpcy5jYXJzTGlzdC5kZWxldGUoaW5kZXgpO1xuICAgICAgLy8gfSk7XG4gICAgICAvL2Nhckxpc3RWaWV3Lmlvcy5zZXBhcmF0b3JDb2xvciA9IFVJQ29sb3IucmVkQ29sb3I7XG4gICAgfSAgICBcblxuXG4gIH1cbiAgXG4gIFxuICBcblxuICBwdWxsVG9SZWZyZXNoKCk6dm9pZHtcbiAgICBjb25zb2xlLmxvZyhgUHVsbCB0byByZWZyZXNoIGV4ZWN1dGVkYCk7XG4gICAgdGhpcy5hZGRDYXJzKCk7XG4gIH1cblxuICBvbkl0ZW1UYXAoYXJncyk6dm9pZHtcbiAgICBjb25zb2xlLmxvZyhgVGFwcGVkIG9uIGFuIGl0ZW1gKTtcbiAgICB0aGlzLmFkZENhcnMoKTtcbiAgfVxufSJdfQ==