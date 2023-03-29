import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersViewPageComponent } from './characters-view-page.component';

describe('CharactersViewPageComponent', () => {
  let component: CharactersViewPageComponent;
  let fixture: ComponentFixture<CharactersViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CharactersViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
