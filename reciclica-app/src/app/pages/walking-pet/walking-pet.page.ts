import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // Додайте це
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

    const updatedAnimals = await Promise.all(animals.map(async (animal) => {
      const breedData = await this.supabaseService.getBreedById(animal.breed_id);

      if (!breedData) {
        console.error('Error fetching breed for animal:', animal);
        return {
          ...animal,
          breed: 'Unknown Breed',
        };
      }

      return {
        ...animal,
        breed: breedData.breed || 'Unknown Breed',
      };
    }));

    this.animals = updatedAnimals;
    this.filteredAnimals = updatedAnimals;
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