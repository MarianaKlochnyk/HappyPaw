import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  async getAnimalById(animalId: number) {
    if (!animalId || isNaN(animalId)) {
      console.error('Invalid animalId provided to SupabaseService:', animalId);
      return null;
    }
  
    const { data, error } = await this.supabase
      .from('animals')
      .select('*')
      .eq('id', animalId) // Переконайся, що поле в БД - 'id', а не 'animal_id'
      .single();
  
    if (error) {
      console.error('Error fetching animal:', error.message);
      return null;
    }
  
    return data;
  }

  from(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private supabase: SupabaseClient;
  
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getSupabase() {
    return this.supabase;
  }

  // Метод для отримання всіх тварин
  async getAnimals() {
    const { data, error } = await this.supabase
      .from('animals')
      .select('*'); // Отримуємо всі стовпці

    if (error) {
      console.error('Error fetching animals data:', error);
      return []; // Повертаємо порожній масив, якщо є помилка
    }

    return data;
  }

  async getShelters() {
    const {data, error} = await this.supabase
    .from('shelters')
    .select('*');

    if(error) {
      console.error('Error  fetching shelters data:', error);
      return[];
    }
    return data;
  }

    // Метод для отримання породи за breed_id
    async getBreedById(breed_id: number) {
      const { data, error } = await this.supabase
        .from('breeds')
        .select('breed')
        .eq('breed_id', breed_id) // Фільтрація за breed_id
        .single(); // Повертаємо тільки один запис
  
      if (error) {
        console.error('Error fetching breed data:', error);
        return null; // Повертаємо null, якщо є помилка
      }
  
      return data; // Повертаємо дані породи
    }

  // Метод для отримання всіх порід
async getBreeds() {
  const { data, error } = await this.supabase
    .from('breeds')
    .select('*'); // Отримуємо всі стовпці

  if (error) {
    console.error('Error fetching breeds data:', error);
    return []; // Повертаємо порожній масив, якщо є помилка
  }

  return data;
}

async getAnimalsWithBreeds() {
  return this.supabase
    .from('animals')
    .select(`
      animal_id,
      name,
      file_path,
      age,
      health_status,
      breed_id,
      breed:breeds(breed)
    `);
}
}
