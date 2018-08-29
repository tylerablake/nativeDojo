import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DatepickerModalComponent } from '../modals/datepicker/datepicker-modal.component';

@Component({
  selector: 'ModalSample',
  moduleId: module.id,
  templateUrl: `./modal-sample.component.html`
})
export class ModalSampleComponent {
    date:Date;
    private viewContainerRef:ViewContainerRef;
    private modalService: ModalDialogService;
  constructor(viewContainerRef: ViewContainerRef, modalService:ModalDialogService) {
    this.modalService = modalService;
    this.viewContainerRef = viewContainerRef;
  }

  onDateTap():void{
      let options: ModalDialogOptions = {
        context: this.date == null ? new Date() : this.date,
        fullscreen: true,
        viewContainerRef: this.viewContainerRef
      };

      this.modalService.showModal(DatepickerModalComponent,options).then((dialogResult:any) => {
          this.date = dialogResult;                         
      });
  }
}