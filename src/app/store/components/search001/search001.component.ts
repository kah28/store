import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { StoreService, Tranrs } from '../service/store.service';



@Component({
  selector: 'app-search001',
  templateUrl: './search001.component.html',
  styleUrls: ['./search001.component.scss']
})
export class Search001Component implements OnInit {

  listForm: FormGroup;

  constructor(private fb: FormBuilder, private storeService: StoreService) {
    this.listForm = this.fb.group({
      tranrs: this.fb.array([]) // 初始化 FormArray
    });

  }



  ngOnInit(): void {

    this.storeService.getQueryStore().subscribe(
      (response: any) => {
        const tranrs = response.data; // 解包數據
        if (Array.isArray(tranrs)) {
          this.populateFormArray(tranrs);
        } else {
          console.error('解包後的資料不是陣列:', tranrs);
        }
      },
      error => {
        console.error('API 錯誤:', error);
      }
    );



  }

  get tranrs(): FormArray {
    return this.listForm.get('tranrs') as FormArray;
  }


  populateFormArray(tranrs: any[]): void {
    tranrs.forEach(tranrs => {
      this.tranrs.push(this.fb.group({
        storeId: [tranrs.storeId],
        storeName: [tranrs.storeName],
        tel: [tranrs.tel]
      }));
    });
  }


}
