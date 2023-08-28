import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasSemLactoseComponent } from './receitas-sem-lactose.component';

describe('ReceitasSemLactoseComponent', () => {
  let component: ReceitasSemLactoseComponent;
  let fixture: ComponentFixture<ReceitasSemLactoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasSemLactoseComponent]
    });
    fixture = TestBed.createComponent(ReceitasSemLactoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
