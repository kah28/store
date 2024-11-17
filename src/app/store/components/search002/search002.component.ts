import { Component, EventEmitter, Output ,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-search002',
  templateUrl: './search002.component.html',
  styleUrls: ['./search002.component.scss']
})
export class Search002Component implements OnInit {

  // 商店資料表單
  storeForm = this.fb.group({
    MWHEADER: this.fb.group({
      msgId: ['GTX001', Validators.required]
    }),
    TRANRQ: this.fb.group({
      storeName: ['', Validators.required]
    })

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  searchKeyword: string = '';

  @Output() search = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();

  onSearch() {
    this.search.emit(this.searchKeyword);
  }

  onClear() {
    this.searchKeyword = '';
    this.clear.emit();
  }

  submitForm(): void {
  //   if (this.storeForm.valid) {
  //     const payload = this.storeForm.value; // 取得表單資料
  //     this.sendStoreData(payload).subscribe(
  //       (response) => {
  //         console.log('Store data submitted successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error submitting store data', error);
  //       }
  //     );
  //   }
  }

    // 使用 HTTP POST 請求將資料發送到後端伺服器
    // sendStoreData(payload: any): Observable<any> {
    //   const apiUrl = 'http://localhost:8080/store/create';
    //   return this.http.post(apiUrl, payload);
    // }

}
