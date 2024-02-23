import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningsComponent } from './evenings.component';

describe('EveningsComponent', () => {
  let component: EveningsComponent;
  let fixture: ComponentFixture<EveningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
