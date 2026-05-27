import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauDeBordPage } from './tableau-de-bord.page';

describe('TableauDeBordPage', () => {
  let component: TableauDeBordPage;
  let fixture: ComponentFixture<TableauDeBordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
