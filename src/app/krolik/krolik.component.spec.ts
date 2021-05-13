import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrolikComponent } from './krolik.component';

describe('KrolikComponent', () => {
  let component: KrolikComponent;
  let fixture: ComponentFixture<KrolikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrolikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrolikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
