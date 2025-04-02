import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  supabase: any;
  constructor(private supabaseService: SupabaseService) {}

  async checkUser() {
    const { data, error } = await this.supabaseService.getSupabase().auth.getUser();
    
    if (error || !data?.user) {
      console.error('User is not logged in!', error);
      return false;
    }
  
    console.log('User logged in:', data.user);
    return true;
  }

async getAnimals() {
    const supabase = this.supabaseService.getSupabase();
  
    // 🔍 Логування для перевірки токена
    const user = await supabase.auth.getUser();
    console.log('User:', user);
  
    if (!user || !user.data?.user) {
      console.error('No user logged in!');
      return [];
    }
  
    const { data, error } = await supabase
      .from('animals')
      .select('*'); 
  
    if (error) {
      console.error('Error fetching animals:', error);
      return [];
    }
  
    return data;
  }
}