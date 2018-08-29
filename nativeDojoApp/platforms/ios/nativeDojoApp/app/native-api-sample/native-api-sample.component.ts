import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'NativeAPISampleComponent',
    moduleId: module.id,
    templateUrl: './native-api-sample.component.html',
    styleUrls: ['./native-api-sample.component.css']
})
export class NativeAPISampleComponent implements OnInit, AfterViewInit {
    @ViewChild('exampleButton') exampleButton: ElementRef;
    @ViewChild('exampleSlider') exampleSlider: ElementRef;
    @ViewChild('exampleText') exampleTextField: ElementRef;
    @ViewChild('exampleSwitch') exampleSwitch: ElementRef;

    constructor(private page: Page) {

    }

    ngOnInit(): void {
        //Can't do it here because the view objects must be created before we can start accessing them
    }

    ngAfterViewInit(): void {                
        if (isIOS) {
            //iOS
            var iosButton = this.exampleButton.nativeElement.ios as UIButton;            
            //iosButton.userInteractionEnabled
            //iosButton.tintColor = UIColor.brownColor;                      
            
            var iosSlider = this.exampleSlider.nativeElement.ios as UISlider;
            iosSlider.thumbTintColor = UIColor.redColor;                        
                
            var iosTextField = this.exampleTextField.nativeElement.ios as UITextField;
            iosTextField.tintColor = UIColor.redColor;
            iosTextField.textColor = UIColor.blueColor;

            var iosSwitch = this.exampleSwitch.nativeElement.ios as UISwitch;
            iosSwitch.thumbTintColor = UIColor.redColor;            
            iosSwitch.tintColor = UIColor.blueColor;






















            
            //iosButton.accessibilityHint = "Click me!";
            //iosButton.userInteractionEnabled = false;
        }
    }

}