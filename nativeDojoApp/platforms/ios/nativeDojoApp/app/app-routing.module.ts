import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListSampleComponent } from "./listview/listsample.component";
import { AudioSampleComponent } from "./audio-sample/audio-sample.component";
import { NativeAPISampleComponent } from "./native-api-sample/native-api-sample.component";
import { ModalSampleComponent } from "./modal-sample/modal-sample.component";

const routes: Routes = [
    { path: "", redirectTo: "/tabs", pathMatch: "full" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" },
    { path: "listview-sample", component:ListSampleComponent },
    { path: "audio-sample", component: AudioSampleComponent },
    { path: "native-api-sample", component: NativeAPISampleComponent },
    { path: "modal-sample", component: ModalSampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
