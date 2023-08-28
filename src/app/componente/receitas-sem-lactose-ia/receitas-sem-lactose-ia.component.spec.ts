import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasSemLactoseIaComponent } from './receitas-sem-lactose-ia.component';

describe('ReceitasSemLactoseIaComponent', () => {
  let component: ReceitasSemLactoseIaComponent;
  let fixture: ComponentFixture<ReceitasSemLactoseIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasSemLactoseIaComponent]
    });
    fixture = TestBed.createComponent(ReceitasSemLactoseIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
