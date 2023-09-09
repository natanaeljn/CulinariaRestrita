import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReceitaComponent } from './listar-receita.component';

describe('ListarReceitaComponent', () => {
  let component: ListarReceitaComponent;
  let fixture: ComponentFixture<ListarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReceitaComponent]
    });
    fixture = TestBed.createComponent(ListarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
