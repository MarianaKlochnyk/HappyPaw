import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  async getPetById(petId: string) {
    const { data, error } = await this.supabase
      .from('animals') // Заміни 'pets' на правильну назву таблиці в твоїй базі даних
      .select('*')
      .eq('animal_id', petId) // Перевірка за полем 'id'
      .single(); // Повертає лише один результат, оскільки шукаємо по ID

    if (error) {
      console.error('Помилка отримання даних:', error);
      return { data: null, error };
    }

    return { data, error };
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

  // Метод для отримання породи за breed_id
// Метод для отримання породи за breed_id
async getBreedById(breed_id: string) {  // Змінено тип з number на string
  const { data, error } = await this.supabase
    .from('breeds')
    .select('breed')
    .eq('breed_id', breed_id)  // breed_id як string
    .single();  // Повертаємо тільки один запис

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
      weight,
      health_status,
      breed_id,
      breed:breeds(breed)
    `);// Використовуємо join між тваринами та породами
}

async getShelterByAnimalId(animalId: string) {
  const { data, error } = await this.supabase
    .from('animals')
    .select('shelter_id')
    .eq('animal_id', animalId)
    .maybeSingle();

  if (error) {
    console.error('Помилка отримання shelter_id:', error);
    return { data: null, error };
  }

  if (!data?.shelter_id) {
    console.warn(`Для тварини ${animalId} не знайдено притулку`);
    return { data: null, error: 'Shelter not found' };
  }

  return this.getShelterById(data.shelter_id);
}

// Метод для отримання притулку за shelter_id
async getShelterById(shelterId: string) {
  const { data, error } = await this.supabase
    .from('shelters') // Ось тут перевірка правильності виклику
    .select('*') // Повертаємо всі дані
    .eq('shelter_id', shelterId);  // Фільтруємо за shelter_id

  if (error) {
    console.error('Помилка при запиті даних притулку:', error);
    return null;  // Повертаємо null при помилці
  }

  return data;  // Повертаємо дані притулку
}
}
