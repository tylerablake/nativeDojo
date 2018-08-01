import { Component, OnInit } from '@angular/core';
import { Car } from './listsample.model';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';
var swipeDelete = require('tns-core-modules/utils/ios-swipe-delete.js');

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
    const carListView = this.page.getViewById('carListView');

    if(carListView){
      const iOSListView = carListView.ios as UITableView;
      swipeDelete.enable(carListView, function(index){
        this.carsList.delete(index);
      });
    }    


  }
  
  
  

  pullToRefresh():void{
    console.log(`Pull to refresh executed`);
    this.addCars();
  }

  onItemTap(args):void{
    console.log(`Tapped on an item`);
  }
}