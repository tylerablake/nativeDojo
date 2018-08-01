import { Component, OnInit } from '@angular/core';
import { Car } from './listsample.model';
import { Page, isIOS, ViewBase } from 'tns-core-modules/ui/page/page';
// var swipeDelete = require('tns-core-modules/utils/ios-swipe-delete.js');

@Component({
  selector: 'ListSample',
  moduleId: module.id,
  templateUrl: './listsample.component.html'
})

export class ListSampleComponent implements OnInit{
  private carsList: Car[];

  ngOnInit():void{
    this.carsList = new Array<Car>();
    this.addCars();
  }

  addCars():void{
    this.carsList.push(new Car("Subaru", "WRX", "Rally Blue", "Sedan"));
    this.carsList.push(new Car("Mitsubishi", "Lancer Evolution", "Palma Red", "Sedan"));
    this.carsList.push(new Car("Nissan", "Skyline GTR", "Godzilla Gray", "Coupe"));
  }  

  constructor(private page:Page) {
    const carListView = this.page.getViewById('carListView') as ViewBase;







    if(isIOS){

      //How to record Audio with AVAudioSession

      //Access app's singleton audio session instance
      let audioSession:AVAudioSession = AVAudioSession.sharedInstance();

      //Get User permission to record
      if(audioSession.respondsToSelector('requestRecordPermission:')){
        AVAudioSession.sharedInstance().requestRecordPermission((granted:boolean) => {
          if(granted){
            console.log('Record Permission Granted!');
            //Configure AudioSession
            //audioSession.category = AVAudioSessionCategoryPlayAndRecord; 
          }
          else{
            console.log('Record Permission DENIED!');
          }
        })
      }









      //Access Microphone








      //var iosListView = carListView.ios as UITableView;
      //var iosListView = carListView.ios as UITableView;
      //iosListView.separatorColor = UIColor.redColor;
      //iosListView.showsVerticalScrollIndicator = false;
      //iosListView.showsHorizontalScrollIndicator = true;
      // swipeDelete.enable(carListView, function(index){
      //   this.carsList.delete(index);
      // });
      //carListView.ios.separatorColor = UIColor.redColor;
    }    


  }
  
  
  

  pullToRefresh():void{
    console.log(`Pull to refresh executed`);
    this.addCars();
  }

  onItemTap(args):void{
    console.log(`Tapped on an item`);
    this.addCars();
  }
}