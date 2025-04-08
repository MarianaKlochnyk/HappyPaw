import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
  imports: [IonicModule],
})
export class CustomPage implements OnInit {
  constructor(private router: Router) {}
  
  goPayment() {
    this.router.navigate(['/custom']);
  }

  ngOnInit(): void {
  }
}
