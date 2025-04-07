import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class HomePage {
  
  animals: any[] = [];
  speciesList: string[] = [];

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAnimalsWithBreeds();
    this.loadSpecies();
  }
  
  async loadAnimalsWithBreeds() {
    const { data: animals, error: animalsError } = await this.supabaseService.getAnimalsWithBreeds();
    
    if (animalsError) {
      console.error('Error fetching animals:', animalsError);
      return;
    }
  
    const updatedAnimals = await Promise.all(animals
      .filter(animal => !animal.is_adopted) // Прибираємо всиновлених тварин
      .map(async (animal) => {
        const [breedData, speciesData] = await Promise.all([
          this.supabaseService.getBreedById(animal.breed_id),
          this.supabaseService.getSpeciesById(animal.species_id)
        ]);
  
        return {
          ...animal,
          species: speciesData?.species || 'Unknown Species',
        };
      })
    );
  
    this.animals = updatedAnimals.filter(animal => animal !== null); // Видаляємо `null` значення
  }

  async loadSpecies() {
    const { data, error } = await this.supabaseService.getAllSpecies();
    
    if (error) {
      console.error('Error fetching species:', error);
      return;
    }
  
    // Сортуємо та зберігаємо список видів
    this.speciesList = data.map(s => s.species).sort();
  }

  // Змінна для відстеження вибраного чипа
  selectedChip: string = '';  // Початково жоден чип не вибраний

  get filteredAnimals() {
    if (!this.selectedChip || this.selectedChip === 'All') {
      return this.animals;
    }
    return this.animals.filter(animal => animal.species === this.selectedChip);
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
  
  goAdoptePet(animalId: string) {
          this.router.navigate(['/adopted-pet',animalId]);
      }
  // Метод для обробки вибору чипа
  selectChip(chip: string) {
    this.selectedChip = chip;  // Оновлює вибраний чип
  }
}

