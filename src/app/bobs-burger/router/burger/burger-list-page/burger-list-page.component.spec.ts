import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerListPageComponent } from './burger-list-page.component';

describe('BurgerListPageComponent', () => {
  let component: BurgerListPageComponent;
  let fixture: ComponentFixture<BurgerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BurgerListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
