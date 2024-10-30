import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Professional } from '@core/models/professional.interface';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() professional!: Professional;
  @Output() close = new EventEmitter<void>();
  messages: any[] = [];
  newMessage: string = '';
  isMinimized: boolean = false;
  unreadMessages = 0;

  ngOnInit() {
    // Mensaje de bienvenida automático
    this.messages.push({
      sender: 'professional',
      text: `¡Hola! Soy ${this.professional.name}. ¿En qué puedo ayudarte?`,
      time: new Date()
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'user',
        text: this.newMessage,
        time: new Date()
      });
      this.newMessage = '';
      // Simular respuesta del profesional
      setTimeout(() => {
        this.messages.push({
          sender: 'professional',
          text: 'Gracias por tu mensaje. Me pondré en contacto contigo pronto.',
          time: new Date()
        });
      }, 1000);
    }
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    if (!this.isMinimized) {
      this.unreadMessages = 0;
    }
  }

  closeChat() {
    this.close.emit();
  }

  onNewMessage() {
    if (this.isMinimized) {
      this.unreadMessages++;
    }
  }
}
