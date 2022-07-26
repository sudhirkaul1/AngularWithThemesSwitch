import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengPaginationComponent } from './primeng-pagination.component';

describe('PrimengPaginationComponent', () => {
  let component: PrimengPaginationComponent;
  let fixture: ComponentFixture<PrimengPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
