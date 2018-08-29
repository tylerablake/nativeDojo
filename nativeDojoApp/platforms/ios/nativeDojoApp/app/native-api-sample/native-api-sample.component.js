"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var NativeAPISampleComponent = /** @class */ (function () {
    function NativeAPISampleComponent(page) {
        this.page = page;
    }
    NativeAPISampleComponent.prototype.ngOnInit = function () {
        //Can't do it here because the view objects must be created before we can start accessing them
    };
    NativeAPISampleComponent.prototype.ngAfterViewInit = function () {
        if (page_1.isIOS) {
            //iOS
            var iosButton = this.exampleButton.nativeElement.ios;
            //iosButton.userInteractionEnabled
            //iosButton.tintColor = UIColor.brownColor;                      
            var iosSlider = this.exampleSlider.nativeElement.ios;
            iosSlider.thumbTintColor = UIColor.redColor;
            var iosTextField = this.exampleTextField.nativeElement.ios;
            iosTextField.tintColor = UIColor.redColor;
            iosTextField.textColor = UIColor.blueColor;
            var iosSwitch = this.exampleSwitch.nativeElement.ios;
            iosSwitch.thumbTintColor = UIColor.redColor;
            iosSwitch.tintColor = UIColor.blueColor;
            //iosButton.accessibilityHint = "Click me!";
            //iosButton.userInteractionEnabled = false;
        }
    };
    __decorate([
        core_1.ViewChild('exampleButton'),
        __metadata("design:type", core_1.ElementRef)
    ], NativeAPISampleComponent.prototype, "exampleButton", void 0);
    __decorate([
        core_1.ViewChild('exampleSlider'),
        __metadata("design:type", core_1.ElementRef)
    ], NativeAPISampleComponent.prototype, "exampleSlider", void 0);
    __decorate([
        core_1.ViewChild('exampleText'),
        __metadata("design:type", core_1.ElementRef)
    ], NativeAPISampleComponent.prototype, "exampleTextField", void 0);
    __decorate([
        core_1.ViewChild('exampleSwitch'),
        __metadata("design:type", core_1.ElementRef)
    ], NativeAPISampleComponent.prototype, "exampleSwitch", void 0);
    NativeAPISampleComponent = __decorate([
        core_1.Component({
            selector: 'NativeAPISampleComponent',
            moduleId: module.id,
            templateUrl: './native-api-sample.component.html',
            styleUrls: ['./native-api-sample.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], NativeAPISampleComponent);
    return NativeAPISampleComponent;
}());
exports.NativeAPISampleComponent = NativeAPISampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWFwaS1zYW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlLWFwaS1zYW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBQ3hGLHNEQUE0RDtBQVE1RDtJQU1JLGtDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLDhGQUE4RjtJQUNsRyxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixLQUFLO1lBQ0wsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBZSxDQUFDO1lBQ2pFLGtDQUFrQztZQUNsQyxpRUFBaUU7WUFFakUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBZSxDQUFDO1lBQ2pFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUU1QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEdBQWtCLENBQUM7WUFDMUUsWUFBWSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUUzQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFlLENBQUM7WUFDakUsU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQXdCeEMsNENBQTRDO1lBQzVDLDJDQUEyQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQXhEMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO21FQUFDO0lBQzFCO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUFnQixpQkFBVTttRUFBQztJQUM1QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBbUIsaUJBQVU7c0VBQUM7SUFDM0I7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO21FQUFDO0lBSjdDLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDO3lDQU80QixXQUFJO09BTnJCLHdCQUF3QixDQTJEcEM7SUFBRCwrQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ05hdGl2ZUFQSVNhbXBsZUNvbXBvbmVudCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF0aXZlLWFwaS1zYW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25hdGl2ZS1hcGktc2FtcGxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVBUElTYW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBWaWV3Q2hpbGQoJ2V4YW1wbGVCdXR0b24nKSBleGFtcGxlQnV0dG9uOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2V4YW1wbGVTbGlkZXInKSBleGFtcGxlU2xpZGVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2V4YW1wbGVUZXh0JykgZXhhbXBsZVRleHRGaWVsZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdleGFtcGxlU3dpdGNoJykgZXhhbXBsZVN3aXRjaDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vQ2FuJ3QgZG8gaXQgaGVyZSBiZWNhdXNlIHRoZSB2aWV3IG9iamVjdHMgbXVzdCBiZSBjcmVhdGVkIGJlZm9yZSB3ZSBjYW4gc3RhcnQgYWNjZXNzaW5nIHRoZW1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7ICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIC8vaU9TXG4gICAgICAgICAgICB2YXIgaW9zQnV0dG9uID0gdGhpcy5leGFtcGxlQnV0dG9uLm5hdGl2ZUVsZW1lbnQuaW9zIGFzIFVJQnV0dG9uOyAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9pb3NCdXR0b24udXNlckludGVyYWN0aW9uRW5hYmxlZFxuICAgICAgICAgICAgLy9pb3NCdXR0b24udGludENvbG9yID0gVUlDb2xvci5icm93bkNvbG9yOyAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGlvc1NsaWRlciA9IHRoaXMuZXhhbXBsZVNsaWRlci5uYXRpdmVFbGVtZW50LmlvcyBhcyBVSVNsaWRlcjtcbiAgICAgICAgICAgIGlvc1NsaWRlci50aHVtYlRpbnRDb2xvciA9IFVJQ29sb3IucmVkQ29sb3I7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgaW9zVGV4dEZpZWxkID0gdGhpcy5leGFtcGxlVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQuaW9zIGFzIFVJVGV4dEZpZWxkO1xuICAgICAgICAgICAgaW9zVGV4dEZpZWxkLnRpbnRDb2xvciA9IFVJQ29sb3IucmVkQ29sb3I7XG4gICAgICAgICAgICBpb3NUZXh0RmllbGQudGV4dENvbG9yID0gVUlDb2xvci5ibHVlQ29sb3I7XG5cbiAgICAgICAgICAgIHZhciBpb3NTd2l0Y2ggPSB0aGlzLmV4YW1wbGVTd2l0Y2gubmF0aXZlRWxlbWVudC5pb3MgYXMgVUlTd2l0Y2g7XG4gICAgICAgICAgICBpb3NTd2l0Y2gudGh1bWJUaW50Q29sb3IgPSBVSUNvbG9yLnJlZENvbG9yOyAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9zU3dpdGNoLnRpbnRDb2xvciA9IFVJQ29sb3IuYmx1ZUNvbG9yO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vaW9zQnV0dG9uLmFjY2Vzc2liaWxpdHlIaW50ID0gXCJDbGljayBtZSFcIjtcbiAgICAgICAgICAgIC8vaW9zQnV0dG9uLnVzZXJJbnRlcmFjdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==