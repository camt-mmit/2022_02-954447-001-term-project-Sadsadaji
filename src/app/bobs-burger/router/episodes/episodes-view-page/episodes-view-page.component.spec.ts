import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesViewPageComponent } from './episodes-view-page.component';

describe('EpisodesViewPageComponent', () => {
  let component: EpisodesViewPageComponent;
  let fixture: ComponentFixture<EpisodesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EpisodesViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
