import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKirilLotinComponent } from './ngx-kiril-lotin.component';

describe('NgxKirilLotinComponent', () => {
  let component: NgxKirilLotinComponent;
  let fixture: ComponentFixture<NgxKirilLotinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKirilLotinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxKirilLotinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
