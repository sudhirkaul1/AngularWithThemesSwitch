import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDynamicComponent } from './primeng-dynamic.component';

describe('PrimengDynamicComponent', () => {
  let component: PrimengDynamicComponent;
  let fixture: ComponentFixture<PrimengDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
