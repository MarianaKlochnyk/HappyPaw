import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class FiltersPage implements OnInit {
    
  constructor(private router: Router, private route: ActivatedRoute) { }
  
    goStatistic() {
        this.router.navigate(['/statistics']);
    }
  
    goHomepage() {
        this.router.navigate(['/homepage']);
    }
    
    goNotification() {
        this.router.navigate(['/notification']);
    }
  
    goLocation() {
          this.router.navigate(['/location']);
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.selectedPeriods = params['periods'] ? params['periods'].split(',') : [];
          this.selectedTypes = params['types'] ? params['types'].split(',') : [];
          this.selectedStatus = params['status'] || '';
        });
      }

  today: string = new Date().toISOString().split('T')[0];
  selectedPeriods: string[] = [];
  selectedTypes: string[] = [];
  startDate: string = this.today;
  endDate: string = this.today;
  selectedStatus: string = ''; 

  togglePeriod(period: string) {
    const index = this.selectedPeriods.indexOf(period);
    if (index > -1) {
      this.selectedPeriods.splice(index, 1);
    } else {
      this.selectedPeriods.push(period);
    }
  }

  toggleType(type: string) {
    const index = this.selectedTypes.indexOf(type);
    if (index > -1) {
      this.selectedTypes.splice(index, 1);
    } else {
      this.selectedTypes.push(type);
    }
  }

  updateStatus(event: any) {
    this.selectedStatus = event.detail.value; 
  }

  clearFilters() {
    this.selectedPeriods = [];
    this.selectedTypes = [];
    this.selectedStatus = ''; 
    this.startDate = '';
    this.endDate = '';
    setTimeout(() => {
      this.startDate = this.today;
      this.endDate = this.today;
    }, 10);
  } 

  applyFilters() {
    this.router.navigate(['/notification'], {
      queryParams: {
        periods: this.selectedPeriods.join(','),
        types: this.selectedTypes.join(','),
        status: this.selectedStatus,
        start: this.startDate,
        end: this.endDate
      }
    });
  }  
}
