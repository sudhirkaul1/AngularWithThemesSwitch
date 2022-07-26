import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentGridComponent } from './fluent-grid.component';

describe('FluentGridComponent', () => {
  let component: FluentGridComponent;
  let fixture: ComponentFixture<FluentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
