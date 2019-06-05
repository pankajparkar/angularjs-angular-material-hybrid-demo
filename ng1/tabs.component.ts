import angular from 'angular';
import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

export const tabsComponent = {
  selector: 'angularjs-tabs',
  templateUrl: './tabs.component.html',
  controller: class TabsComponent {
    $digestCount;
    showTabsContainer = false;
    universityName = 'UBC University';

    constructor($scope) {
      this.$digestCount = 0;
      $scope.$watch(() => {
        this.$digestCount++;
        if (this.$digestCount % 100 === 0) {
          console.log('$digest', this.$digestCount);
        }
      });
    }
  }
};

@Directive({selector: tabsComponent.selector})
export class TabsComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(tabsComponent.selector, elementRef, injector);
  }
}
