import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  imports: [
    CommonModule,   
    IonicModule
  ]
})
export class NotificationPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToFilters() {
    this.router.navigate(['/filters'], {
      queryParams: {
        periods: this.selectedPeriods.join(','),
        types: this.selectedTypes.join(','),
        status: this.selectedStatus,
      }
    });
  }

   goHomepage() {
          this.router.navigate(['/homepage']);
  }
  
   goNotification() {
          this.router.navigate(['/notification']);
  }
  
    goStatistic() {
            this.router.navigate(['/statistics']);
  }
  goLocation() {
              this.router.navigate(['/location']);
    }
  
    allNotifications = [
      {
        title: 'Today is the last day of collecting aid!📦',
        text: 'Hurry up and make your contribution.',
        readStatus: true,
        date: '08 April 2025',
        time: '18:45 PM',
        type: 'reminder',
      },
      {
        title: 'We have updated the app! 🔄',
        text: 'New features for even more convenient help are now available. Check it out!',
        readStatus: false,
        date: '18 February 2025',
        time: '08:35 AM',
        type: 'update',
      },
      {
        title: 'New campaign: ‘Warmth for the homeless’. ❤️',
        text: 'Get involved now and give someone a cosy place to stay!',
        date: '05 February 2025',
        time: '23:55 PM',
        readStatus: true,
        type: 'campaign',
      },
      {
        title: 'Wow! You have already helped 25 animals! 🎉',
        text: 'Keep doing good with us.',
        date: '01 February 2025',
        time: '17:05 PM',
        readStatus: true,
        type: 'achievement',
      },
      {
        title: 'Technical work is scheduled for 28 February. 🔔',
        text: 'The application may be temporarily unavailable. Thank you for your understanding!',
        date: '31 January 2025',
        time: '18:45 PM',
        readStatus: false,
        type: 'update',
      },
      {
        title: 'Charity food drive continues!🍏',
        text: 'Join us and help those in need.',
        date: '12 January 2025',
        time: '06:15 AM',
        readStatus: false,
        type: 'campaign',
      },
    ] 
    
    filteredNotifications = [...this.allNotifications];
    notificationsCount: number = this.filteredNotifications.length;

    updateNotificationsCount() {
      this.notificationsCount = this.filteredNotifications.length;
    }

    getIconPath(type: string): string {
      switch (type) {
        case 'reminder': return 'assets/reminder_notifications.svg';
        case 'campaign': return 'assets/campaigns_notification.svg';
        case 'achievement': return 'assets/achievements_notifications.svg';
        case 'update': return 'assets/update_notifications (2).svg';
        default: return 'assets/campaigns_notification.svg';
      }
    }

    selectedPeriods: string[] = [];
    selectedStatus: string = '';
    selectedTypes: string[] = [];

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (!params['periods'] && !params['status'] && !params['types']) {
          this.selectedPeriods = [];
          this.selectedStatus = '';
          this.selectedTypes = [];
        } else {
          if (params['periods']) {
            this.selectedPeriods = params['periods'].split(',');
          }
          if (params['status']) {
            this.selectedStatus = params['status'];
          }
          if (params['types']) {
            this.selectedTypes = params['types'].split(',');
          }
        }
        
        this.applyPeriodFilters(); 
      });
    }
  
    applyPeriodFilters() {
      this.filteredNotifications = this.allNotifications.filter(notification => {
        const isInPeriod = this.isInPeriod(notification.date);
        const hasStatus = this.isStatus(notification.readStatus);
        const isInType = this.isType(notification.type);
        return isInPeriod && hasStatus && isInType;
      });
      this.updateNotificationsCount();
    }
  
    isInPeriod(date: string): boolean {
      const notificationDate = new Date(date);
      const today = new Date();
  
      if (this.selectedPeriods.includes('today')) {
        return notificationDate.toDateString() === today.toDateString();
      }
  
      if (this.selectedPeriods.includes('week')) {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
        return notificationDate >= startOfWeek && notificationDate <= endOfWeek;
      }
  
      if (this.selectedPeriods.includes('month')) {
        return notificationDate.getMonth() === today.getMonth() && notificationDate.getFullYear() === today.getFullYear();
      }
  
      if (this.selectedPeriods.includes('prevMonth')) {
        const prevMonth = new Date(today);
        prevMonth.setMonth(today.getMonth() - 1);
        return notificationDate.getMonth() === prevMonth.getMonth() && notificationDate.getFullYear() === prevMonth.getFullYear();
      }
  
      if (this.selectedPeriods.includes('year')) {
        return notificationDate.getFullYear() === today.getFullYear();
      }
  
      return true; 
    }

    isStatus(readStatus: boolean): boolean {
      if (this.selectedStatus === '') {
        return true; 
      }
  
      if (this.selectedStatus === 'read') {
        return readStatus === true;
      }
  
      if (this.selectedStatus === 'unread') {
        return readStatus === false;
      }
  
      return true;
    } 
    
    isType(type: string): boolean {
      if (this.selectedTypes.length === 0) {
        return true; 
      }
  
      return this.selectedTypes.includes(type);
    }
}
