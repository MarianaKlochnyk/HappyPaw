import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobmduc2xicmJkend4dHV4bG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzY2NDAsImV4cCI6MjA1NjE1MjY0MH0.j9t_m_O1qkcx_TavvQxinwxX8ZjvnWXMLlOjGJ8NlYc'; // Ваш реальный API-ключ
  private encodedKey = btoa(this.apiKey + ':'); 

  constructor() { }

  request(url: string, method: 'GET' | 'POST' |  'DELETE' , body?: any) {
    const options: HttpOptions = {
      url,
      method, 
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      ...(body ? { data: body } : {}) 
    };
    return from(CapacitorHttp.request(options));
  }
}
