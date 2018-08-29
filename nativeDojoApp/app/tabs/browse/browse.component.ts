import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor(private router:Router) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }

    onListViewClick():void{
        this.router.navigate(['/listview-sample']);
    }

    onNSAudioClick():void{
        this.router.navigate(['/audio-sample']);
    }

    onNativeAPIClick():void{
        this.router.navigate(['/native-api-sample']);
    }

    onModalClick():void{
        this.router.navigate(['/modal-sample'])
    }
}
