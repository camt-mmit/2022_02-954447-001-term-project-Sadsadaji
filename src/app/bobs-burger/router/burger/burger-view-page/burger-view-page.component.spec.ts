import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerViewPageComponent } from './burger-view-page.component';

describe('BurgerViewPageComponent', () => {
  let component: BurgerViewPageComponent;
  let fixture: ComponentFixture<BurgerViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BurgerViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
