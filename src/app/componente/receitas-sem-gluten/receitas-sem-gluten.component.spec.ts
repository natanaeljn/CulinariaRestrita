import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasSemGlutenComponent } from './receitas-sem-gluten.component';

describe('ReceitasSemGlutenComponent', () => {
  let component: ReceitasSemGlutenComponent;
  let fixture: ComponentFixture<ReceitasSemGlutenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasSemGlutenComponent]
    });
    fixture = TestBed.createComponent(ReceitasSemGlutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
