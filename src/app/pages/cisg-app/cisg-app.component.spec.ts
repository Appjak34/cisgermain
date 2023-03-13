import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisgAppComponent } from './cisg-app.component';

describe('CisgAppComponent', () => {
  let component: CisgAppComponent;
  let fixture: ComponentFixture<CisgAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CisgAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CisgAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
