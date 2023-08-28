import { TestBed } from '@angular/core/testing';

import { ListarReceitasService } from './listar-receitas.service';

describe('ListarReceitasService', () => {
  let service: ListarReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarReceitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
