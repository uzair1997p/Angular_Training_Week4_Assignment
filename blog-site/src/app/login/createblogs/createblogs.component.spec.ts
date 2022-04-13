import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblogsComponent } from './createblogs.component';

describe('CreateblogsComponent', () => {
  let component: CreateblogsComponent;
  let fixture: ComponentFixture<CreateblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
