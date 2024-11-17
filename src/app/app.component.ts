import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  data = [
    { id: 1, name: '商品 A' },
    { id: 2, name: '商品 B' },
    { id: 3, name: '商品 C' }
  ];

  filteredData = [...this.data];

  onSearch(keyword: string) {
    this.filteredData = this.data.filter(item =>
      item.name.includes(keyword)
    );
  }

  onClear() {
    this.filteredData = [...this.data];
  }

  onDelete(item: any) {
    this.data = this.data.filter(i => i !== item);
    this.filteredData = [...this.data];
  }

  onSelect(item: any) {
    console.log('Selected item:', item);
  }

}
