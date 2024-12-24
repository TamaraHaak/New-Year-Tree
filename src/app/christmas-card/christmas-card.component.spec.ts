import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasCardComponent } from './christmas-card.component';

describe('ChristmasCardComponent', () => {
  let component: ChristmasCardComponent;
  let fixture: ComponentFixture<ChristmasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
