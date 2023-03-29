import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesViewComponent } from './episodes-view.component';

describe('EpisodesViewComponent', () => {
  let component: EpisodesViewComponent;
  let fixture: ComponentFixture<EpisodesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EpisodesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
