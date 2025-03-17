import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '/Users/mac/Downloads/HappyPow/reciclica-app/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getTodos() {
    return this.supabase.from('todos').select('*');
  }

  // Тестовий запит для перевірки підключення
  async testConnection() {
    const { data, error } = await this.supabase.from('todos').select('*'); // Замість 'todos' використовуйте вашу таблицю

    if (error) {
      console.error('Error connecting to Supabase:', error);
      return false;
    } else {
      console.log('Connection successful, data:', data);
      return true;
    }
  }
}