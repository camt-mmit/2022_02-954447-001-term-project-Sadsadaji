import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerViewComponent } from './burger-view.component';

describe('BurgerViewComponent', () => {
  let component: BurgerViewComponent;
  let fixture: ComponentFixture<BurgerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BurgerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
