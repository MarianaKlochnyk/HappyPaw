
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SupabaseService {

  client: any;
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
      shelter_id,
      name,
      file_path,
      age,
      weight,
      health_status,
      breed_id,
      breed:breeds(breed),
      is_adopted,
      species_id
    `);// Використовуємо join між тваринами та породами
}

async getSpeciesById(species_id: number) {
  const { data, error } = await this.supabase
    .from('species') // Назва таблиці в Supabase
    .select('species')
    .eq('species_id', species_id)
    .maybeSingle(); // Отримати тільки один запис

  if (error) {
    console.error('Error fetching species:', error);
    return null;
  }

  return data;
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

async getShelterLocations() {
  const { data, error } = await this.supabase
    .from('locations')
    .select('latitude, longitude, shelter_id');

  if (error) {
    console.error('Помилка отримання локацій притулків:', error);
    return [];
  }
  
  return data;
}

// Отримання тварин, що потребують термінової допомоги
async getUrgentShelters() {
  // Отримуємо список shelter_id з таблиці 'needs', де priority_id = 1
  const { data: needsData, error: needsError } = await this.supabase
    .from('needs')
    .select('shelter_id')
    .eq('priority_id', 1);

  if (needsError) {
    console.error('Error fetching needs data:', needsError);
    return { data: [], error: needsError };
  }

  // Якщо є shelter_id, то використовуємо їх для отримання притулків з таблиці 'shelters'
  const shelterIds = needsData.map((need) => need.shelter_id);

  if (shelterIds.length === 0) {
    return { data: [], error: null };
  }

  // Отримуємо притулки з таблиці 'shelters', де shelter_id є в shelterIds
  const { data: shelters, error: sheltersError } = await this.supabase
    .from('shelters')
    .select('shelter_id, shelter_name, file_path')
    .in('shelter_id', shelterIds);

  return { data: shelters, error: sheltersError };
}

// Отримання тварин, що потребують термінової допомоги
async getUrgentAnimals() {
  const { data, error } = await this.supabase
    .rpc('get_urgent_animals');  // Викликаємо RPC-функцію для отримання тварин

  if (error) {
    console.error('Error fetching urgent animals:', error);
    return [];
  }

  return data;
}

async getNeeds() {
  const { data, error } = await this.supabase
    .from('needs')
    .select('*');  // Або інші поля, якщо тобі потрібні конкретні дані

  if (error) {
    console.error('Error fetching needs:', error);
    return { data: [], error };
  }

  return { data, error: null };
}

async getShelters() {
  const { data, error } = await this.supabase
    .from('shelters')
    .select(`
      shelter_id,
      shelter_name,
      file_path,
      needs:needs(priority_id)
    `);  // Додаємо зв’язок з `needs`

  if (error) {
    console.error('Error fetching shelters:', error);
    return [];
  }
  return data;
}

async getDonations() {
  const { data, error } = await this.supabase
    .from('donation')
    .select('*'); // Отримуємо всі записи про донати

  if (error) {
    console.error('Помилка при отриманні донатів:', error);
    return { data: [], error };
  }
  
  return { data, error: null };
}

async getCategories() {
  const { data, error } = await this.supabase
    .from('categories')
    .select('*'); // Отримуємо всі категорії
  
  if (error) {
    console.error("Error fetching categories:", error);
  }
  return { data, error };
}

async getVolunteersCount() {
  const { count, error } = await this.supabase
    .from('volunteer') // Назва таблиці з волонтерами
    .select('*', { count: 'exact', head: true }); // Повертає тільки кількість
  
  return { count, error };
}

async getTotalDonations() {
  const { data, error } = await this.supabase
    .from('donation') // Назва таблиці з донатами
    .select('amount') // Отримуємо тільки поле amount

  if (error) {
    return { sum: 0, error };
  }

  const sum = data.reduce((total, donation) => total + donation.amount, 0);
  return { sum, error: null };
}

async getCurrentUser() {
  const { data, error } = await this.supabase.auth.getUser();
  if (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
  return data.user;
}

async getVolunteerByUserId(userId: string) {
  const { data, error } = await this.supabase
    .from("volunteer") // Назва таблиці в Supabase
    .select("name") // Отримуємо лише ім'я волонтера
    .eq("user_id", userId) // Фільтр по user_id
    .single(); // Очікуємо лише один запис  

  if (error) {
    console.error("Error fetching volunteer:", error);
    return null;
  }
  return data; // Повертає об'єкт { name: "..." }
}

}
