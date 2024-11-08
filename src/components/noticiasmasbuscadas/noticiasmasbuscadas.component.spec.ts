import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasmasbuscadasComponent } from './noticiasmasbuscadas.component';

describe('NoticiasmasbuscadasComponent', () => {
  let component: NoticiasmasbuscadasComponent;
  let fixture: ComponentFixture<NoticiasmasbuscadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasmasbuscadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasmasbuscadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
