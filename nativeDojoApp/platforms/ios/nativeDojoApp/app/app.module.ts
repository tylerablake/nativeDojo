import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListSampleComponent } from "./listview/listsample.component";
import { AudioSampleComponent } from "./audio-sample/audio-sample.component";
import { NativeAPISampleComponent } from "./native-api-sample/native-api-sample.component";
import { ModalSampleComponent } from "./modal-sample/modal-sample.component";
import { DatepickerModalComponent } from "./modals/datepicker/datepicker-modal.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListSampleComponent,
        AudioSampleComponent,
        NativeAPISampleComponent,
        ModalSampleComponent,
        DatepickerModalComponent 
    ],
    entryComponents: [
        DatepickerModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
