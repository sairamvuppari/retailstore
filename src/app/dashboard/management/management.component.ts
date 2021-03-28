import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  region: string;
  regions: any = [{ value: 'hyderabad', name: 'Hyderabad' }, { value: 'delhi', name: 'Delhi' }, { value: 'warangal', name: 'Warangal' }];

  constructor() { }

  ngOnInit(): void {
  }
  checkAll(e) {
    // return this.arrFeaturesnames.forEach(x => x.state = e.target.checked);
  }
  isAllChecked() {
    // return this.arrFeaturesnames.every(_ => _.state);
  }
  onRegionChange(event) {
    this.region = event.target.value;
  }

}
