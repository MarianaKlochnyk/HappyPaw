import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  // Викликається при ініціалізації компонента
  async ngOnInit() {
    // Перевіряємо підключення до Supabase
    const connectionStatus = await this.supabaseService.testConnection();
    if (connectionStatus) {
      console.log('Supabase is connected and working!');
      await this.loadTodos(); // Якщо підключення успішне, завантажуємо todos
    } else {
      console.error('There was an error with the connection.');
    }
  }

  // Метод для завантаження todos
  async loadTodos() {
    const { data, error } = await this.supabaseService.getTodos();
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      this.todos = data; // Присвоєння отриманих даних в масив todos
    }
  }
}
