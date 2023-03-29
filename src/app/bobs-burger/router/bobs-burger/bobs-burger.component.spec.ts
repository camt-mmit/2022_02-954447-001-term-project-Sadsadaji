import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobsBurgerComponent } from './bobs-burger.component';

describe('BobsBurgerComponent', () => {
  let component: BobsBurgerComponent;
  let fixture: ComponentFixture<BobsBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BobsBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobsBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
