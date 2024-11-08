import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicontenidoComponent } from './micontenido.component';

describe('MicontenidoComponent', () => {
  let component: MicontenidoComponent;
  let fixture: ComponentFixture<MicontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicontenidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
