import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-walking-pet-animal',
  templateUrl: './walking-pet-animal.page.html',
  styleUrls: ['./walking-pet-animal.page.scss'],
  imports: [
    IonicModule
  ]
})

export class WalkingPetAnimalPage implements OnInit {
  animal: any;
  breed: string = 'Unknown Breed';  // Змінна для збереження породи
  shelter: any = null;  // Змінна для збереження даних притулку

  constructor(private router: Router, private route: ActivatedRoute, private supabase: SupabaseService) { }

  ngOnInit() {
    const animalId = this.route.snapshot.paramMap.get('animal_id');
    if (animalId) {
      this.loadAnimalDetails(animalId);
    }
  }

  async loadAnimalDetails(animalId: string) {
    const { data, error } = await this.supabase.getPetById(animalId);
    if (error) {
      console.error('Помилка отримання даних', error);
    } else {
      this.animal = data;
      this.loadBreed(this.animal.breed_id); // Завантажуємо породу
      // Після цього завантажуємо притулок, який відповідає shelter_id
      this.loadShelter(this.animal.shelter_id);  // shelter_id з таблиці animals
    }
  }

  // Метод для отримання породи за breed_id
  async loadBreed(breedId: string) {
    // Регулярний вираз для перевірки валідного UUID
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    
    // Перевірка, чи є breedId валідним UUID
    if (!uuidRegex.test(breedId)) {
      console.error('Некоректний breedId:', breedId);
      this.breed = 'Unknown Breed';  // Якщо некоректний breedId, встановлюємо значення за замовчуванням
      return;
    }
  
    // Якщо breedId валідний, робимо запит
    const breedData = await this.supabase.getBreedById(breedId);
  
    if (breedData) {
      this.breed = breedData.breed || 'Unknown Breed';  // Встановлюємо породу або 'Unknown Breed'
    } else {
      console.error('Помилка отримання породи');
      this.breed = 'Unknown Breed';  // Якщо породу не вдалося отримати
    }
  }

  // Метод для отримання притулку за shelter_id
  async loadShelter(shelterId: string) {
    const shelterData = await this.supabase.getShelterById(shelterId);  // Отримуємо дані притулку
  
    if (!shelterData) {  // Якщо немає даних
      console.error('Не вдалося отримати притулок');
      return;
    }
  
    console.log('Отримані дані притулку:', shelterData);  // Логування отриманих даних
    this.shelter = shelterData[0];  // Зберігаємо перший елемент, якщо є кілька
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

  goWalkingPet() {
    this.router.navigate(['/walking-pet']);
  }

  goLocation() {
    this.router.navigate(['/location']);
  }
}