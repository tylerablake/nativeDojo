import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListSampleComponent } from "./listview/listsample.component";
import { AudioSampleComponent } from "./audio-sample/audio-sample.component";

const routes: Routes = [
    { path: "", redirectTo: "/tabs", pathMatch: "full" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" },
    { path: "listviewsample", component:ListSampleComponent },
    { path: "audiosample", component:AudioSampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
