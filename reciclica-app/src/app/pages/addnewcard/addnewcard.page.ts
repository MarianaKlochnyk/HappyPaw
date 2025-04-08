import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewcard',
  templateUrl: './addnewcard.page.html',
  styleUrls: ['./addnewcard.page.scss'],
  imports: [IonicModule],
})
export class AddnewcardPage implements OnInit {
      constructor(private router: Router) { }
    
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
  ngOnInit() {}
}
