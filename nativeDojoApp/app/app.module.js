"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var listsample_component_1 = require("./listview/listsample.component");
var audio_sample_component_1 = require("./audio-sample/audio-sample.component");
var native_api_sample_component_1 = require("./native-api-sample/native-api-sample.component");
var modal_sample_component_1 = require("./modal-sample/modal-sample.component");
var datepicker_modal_component_1 = require("./modals/datepicker/datepicker-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                listsample_component_1.ListSampleComponent,
                audio_sample_component_1.AudioSampleComponent,
                native_api_sample_component_1.NativeAPISampleComponent,
                modal_sample_component_1.ModalSampleComponent,
                datepicker_modal_component_1.DatepickerModalComponent
            ],
            entryComponents: [
                datepicker_modal_component_1.DatepickerModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msd0VBQXNFO0FBQ3RFLGdGQUE2RTtBQUM3RSwrRkFBMkY7QUFDM0YsZ0ZBQTZFO0FBQzdFLDZGQUEwRjtBQTBCMUY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osMENBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLHNEQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQixxREFBd0I7YUFDM0I7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IscURBQXdCO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0U2FtcGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdHZpZXcvbGlzdHNhbXBsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXVkaW9TYW1wbGVDb21wb25lbnQgfSBmcm9tIFwiLi9hdWRpby1zYW1wbGUvYXVkaW8tc2FtcGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVBUElTYW1wbGVDb21wb25lbnQgfSBmcm9tIFwiLi9uYXRpdmUtYXBpLXNhbXBsZS9uYXRpdmUtYXBpLXNhbXBsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTW9kYWxTYW1wbGVDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC1zYW1wbGUvbW9kYWwtc2FtcGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTGlzdFNhbXBsZUNvbXBvbmVudCxcclxuICAgICAgICBBdWRpb1NhbXBsZUNvbXBvbmVudCxcclxuICAgICAgICBOYXRpdmVBUElTYW1wbGVDb21wb25lbnQsXHJcbiAgICAgICAgTW9kYWxTYW1wbGVDb21wb25lbnQsXHJcbiAgICAgICAgRGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50IFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIERhdGVwaWNrZXJNb2RhbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==