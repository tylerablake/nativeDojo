import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'DatepickerModal',
  moduleId: module.id,
  templateUrl: `./datepicker-modal.component.html`
})
export class  DatepickerModalComponent{
    date:any;

  constructor(private params: ModalDialogParams) {
    this.date = params.context;
  }

  onDoneTap():void{
      this.params.closeCallback(this.date);
  }  
}