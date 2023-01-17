import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcardsComponent } from './getcards.component';

describe('GetcardsComponent', () => {
  let component: GetcardsComponent;
  let fixture: ComponentFixture<GetcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
