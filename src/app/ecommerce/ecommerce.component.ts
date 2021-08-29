import { Component, OnInit } from '@angular/core';

export interface filterItem {
  itemName: string;
}

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  isLoading = false;

  isShowMoreFilter = false;

  isShowMobileFilter = false;

  isShowShoppingcar = false;

  filterItem: filterItem[] = [
    {
      itemName: '家電類'
    },
    {
      itemName: '食物類'
    },
    {
      itemName: '清潔類'
    },
    {
      itemName: '遊戲類'
    },
    {
      itemName: '居家生活類'
    },
    {
      itemName: '限制級類'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
  }

  toggleMobileFilterPanel(isShow: boolean): void {
    this.isShowMobileFilter = isShow;
  }

  toggleFilterItem(isShow: boolean): void {
    this.isShowMoreFilter = isShow;
  }

  hideLoadingSpinner(): void {
    this.isLoading = false;
  }

  toggleShoppingcar(isShow: boolean) {
    this.isShowShoppingcar = isShow;
  }
}
