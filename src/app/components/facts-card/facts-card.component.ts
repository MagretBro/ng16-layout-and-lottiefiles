import { Component } from '@angular/core';

@Component({
  selector: 'app-facts-card',
  templateUrl: './facts-card.component.html',
  styleUrls: ['./facts-card.component.scss']
})
export class FactsCardComponent {
  public currentIndex: number = 0;

  public facts = [
    'Добыча криптовалюты, особенно биткойна, требует больших затрат энергии. В настоящее время ведутся работы по созданию более энергоэффективных механизмов консенсуса для решения этих проблем.',
    'Регулирование криптовалют варьируется по всему миру. В то время как некоторые страны принимают ее, другие проявляют осторожность из-за ее нестабильности и сложностей в регулировании децентрализованной системы.',
    'Криптовалюты известны своей высокой волатильностью, что создает как значительные инвестиционные возможности, так и риски.',
    'Криптовалюты набирают обороты в развивающихся странах благодаря своему потенциалу в предоставлении финансовых услуг небанковскому населению и содействию более дешевым и быстрым денежным переводам.',
    'Правовой статус криптовалют находится в процессе эволюции. Сальвадор принял биткоин в качестве законного платежного средства.'
  ];

  get currentFact() {
    return this.facts[this.currentIndex];
  }

  incrementIndex() {
    this.currentIndex = (this.currentIndex + 1) % this.facts.length;
  }

  decrementIndex() {
    this.currentIndex = (this.currentIndex - 1 + this.facts.length) % this.facts.length;

  }
}
