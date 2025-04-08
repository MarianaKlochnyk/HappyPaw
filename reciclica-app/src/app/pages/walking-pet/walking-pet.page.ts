import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
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
    FormsModule,  // Додайте FormsModule сюди
  ]
})
export class WalkingPetPage implements OnInit {
  animals: any[] = [];
  filteredAnimals: any[] = [];
  breeds: any[] = [];
  searchQuery: string = '';

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
  
    console.log('Fetched animals:', animals); // Перевірка отриманих тварин
  
    const updatedAnimals = await Promise.all(animals
      .filter(animal => !animal.is_adopted) // Прибираємо всиновлених тварин
      .map(async (animal) => {
        const [breedData, speciesData] = await Promise.all([
          this.supabaseService.getBreedById(animal.breed_id),
          this.supabaseService.getSpeciesById(animal.species_id) // Викликаємо новий метод
        ]);
  
        console.log(`Animal ID ${animal.species_id}: species ->`, speciesData?.species);
  
        // Фільтруємо тільки собак (species = 'Dog')
        if (!speciesData || speciesData.species !== 'Dog') {
          return null;
        }
  
        return {
          ...animal,
          breed: breedData?.breed || 'Unknown Breed',
          species: speciesData?.species || 'Unknown Species',
        };
      })
    );
  
    console.log('Updated animals:', updatedAnimals); // Перевірка після фільтрації
  
    this.animals = updatedAnimals.filter(animal => animal !== null); // Видаляємо `null` значення
    this.filteredAnimals = this.animals;
  }

  filterAnimals() {
    this.filteredAnimals = this.animals.filter(animal => {
      const nameMatches = animal.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const breedMatches = animal.breed.toLowerCase().includes(this.searchQuery.toLowerCase());
      return nameMatches || breedMatches;
    });
  }

  goWalkingPetAnimal(animalId: string) {
    this.router.navigate(['/walking-pet-animal', animalId]);
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