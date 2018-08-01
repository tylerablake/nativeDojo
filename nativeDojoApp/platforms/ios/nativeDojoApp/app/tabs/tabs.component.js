"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform/platform");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    TabsComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "" : "res://tabIcons/" + icon;
    };
    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "TabsComponent",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ["./tabs.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBK0Q7QUFTL0Q7SUFJSTtRQUNJOzs7c0VBRzhEO0lBQ2xFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0k7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7OztPQU5BO0lBUUQ7Ozs7a0VBSThEO0lBQzlELHFDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLE1BQU0sQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7a0VBSThEO0lBQzlELDhDQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUN0RCxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQS9DUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FnRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0vcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXcvdGFiLXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVGFic0NvbXBvbmVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RhYnMuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IGFwcCBzZXJ2aWNlcyB0aGF0IHdpbGwgYmUgbmVlZGVkIGZvclxyXG4gICAgICAgICogdGhlIHdob2xlIHRhYiBuYXZpZ2F0aW9uIGxheW91dCBhcyBhIHdob2xlLlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgd2hvbGUgdGFiXHJcbiAgICAgICAgKiBuYXZpZ2F0aW9uIGxheW91dCBhcyBhIHdob2xlLlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgXCJnZXRJY29uU291cmNlXCIgZnVuY3Rpb24gcmV0dXJucyB0aGUgY29ycmVjdCB0YWIgaWNvbiBzb3VyY2VcclxuICAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGFwcCBpcyByYW4gb24gQW5kcm9pZCBvciBpT1MuXHJcbiAgICAqIFlvdSBjYW4gZmluZCBhbGwgcmVzb3VyY2VzIGluIC9BcHBfUmVzb3VyY2VzL29zXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBpc0FuZHJvaWQgPyBcIlwiIDogXCJyZXM6Ly90YWJJY29ucy9cIiArIGljb247XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogR2V0IHRoZSBjdXJyZW50IHRhYiB2aWV3IHRpdGxlIGFuZCBzZXQgaXQgYXMgYW4gQWN0aW9uQmFyIHRpdGxlLlxyXG4gICAgKiBMZWFybiBtb3JlIGFib3V0IHRoZSBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkIGV2ZW50IGhlcmU6XHJcbiAgICAqIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2Nvb2tib29rL3VpL3RhYi12aWV3I3VzaW5nLXNlbGVjdGVkaW5kZXhjaGFuZ2VkLWV2ZW50LWZyb20teG1sXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYlZpZXdJdGVtID0gdGFiVmlldy5pdGVtc1thcmdzLm5ld0luZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkVGFiVmlld0l0ZW0udGl0bGU7XHJcbiAgICB9XHJcbn1cclxuIl19