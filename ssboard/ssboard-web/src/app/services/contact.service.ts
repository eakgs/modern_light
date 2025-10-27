import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private base = 'http://localhost:5241/api';

  async send(payload: {name:string; email:string; message:string}) {
    const res = await fetch(`${this.base}/contact`, {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Failed');
    return res.json();
  }

  async listProjects() {
    const res = await fetch(`${this.base}/projects`);
    if (!res.ok) throw new Error('Failed');
    return res.json();
  }
}
