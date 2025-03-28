import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-walking-pet',
  templateUrl: './walking-pet.page.html',
  styleUrls: ['./walking-pet.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class WalkingPetPage implements OnInit {
  animals: any[] = [];
  breeds: any[]=[];
  supabase: any;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAnimalsWithBreeds();
  }

  async loadAnimalsWithBreeds() {
    const { data: animals, error: animalsError } = await this.supabaseService.getAnimalsWithBreeds();
  
    if (animalsError) {
      console.error('Error fetching animals:', animalsError);
      return;
    }
  
    // Тепер для кожної тварини робимо запит, щоб отримати породу за breed_id
    const updatedAnimals = await Promise.all(animals.map(async (animal) => {
      const breedData = await this.supabaseService.getBreedById(animal.breed_id);
  
      if (!breedData) {
        console.error('Error fetching breed for animal:', animal);
        return {
          ...animal,
          breed: 'Unknown Breed', // Якщо порода не знайдена, ставимо "Unknown Breed"
        };
      }
  
      return {
        ...animal,
        breed: breedData.breed || 'Unknown Breed', // Додаємо породу або "Unknown Breed"
      };
    }));
  
  
    this.animals = updatedAnimals;
  }

  // Метод для отримання породи за breed_id
async getBreedById(breed_id: number) {
  const { data, error } = await this.supabase
    .from('breeds')
    .select('breed')
    .eq('id', breed_id) // Знаходимо породу за breed_id
    .single(); // Маємо тільки один запис

  if (error) {
    console.error('Error fetching breed data:', error);
    return null; // Якщо помилка, повертаємо null
  }

  return data;
}


goWalkingPetAnimal(animalId: any) {
  this.router.navigate(['/walking-pet-animal']);
}

  goHomepage() {
    this.router.navigate(['/home']);
  }

  goLocation() {
    this.router.navigate(['/location']);
  }

  goStatistic() {
    this.router.navigate(['/statistics']);
  }

  goNotification() {
    this.router.navigate(['/notifications']);
  }
}
   