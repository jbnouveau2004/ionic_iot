import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauDeBordEnLignePage } from './tableau-de-bord-en-ligne.page';

describe('TableauDeBordEnLignePage', () => {
  let component: TableauDeBordEnLignePage;
  let fixture: ComponentFixture<TableauDeBordEnLignePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordEnLignePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
