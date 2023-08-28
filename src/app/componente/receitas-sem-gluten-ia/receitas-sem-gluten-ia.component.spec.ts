import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasSemGlutenIaComponent } from './receitas-sem-gluten-ia.component';

describe('ReceitasSemGlutenIaComponent', () => {
  let component: ReceitasSemGlutenIaComponent;
  let fixture: ComponentFixture<ReceitasSemGlutenIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasSemGlutenIaComponent]
    });
    fixture = TestBed.createComponent(ReceitasSemGlutenIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
