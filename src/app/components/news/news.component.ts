import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  public newsItems = [
    { date: '24.06.2024', title: 'Итоги дня', text: 'Крупнейший в США биткоин-майнер начал добывать другую криптовалюту' },
    { date: '24.06.2024', title: 'Выборы', text: '«Тремп» против «Бодена». Как мемкоины монетизируют предвыборную гонку США' },
    { date: '24.06.2024', title: 'Киты недели', text: 'Неизвестный пользователь продал нетронутые за 14 лет биткоины за $3 млн.' },
    { date: '24.06.2024', title: 'Bitcoin', text: 'Биткоин закрепился выше $61 тыс.' },
  ];
}
