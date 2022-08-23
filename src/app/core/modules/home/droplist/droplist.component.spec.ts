import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroplistComponent } from './droplist.component';

describe('DroplistComponent', () => {
  let component: DroplistComponent;
  let fixture: ComponentFixture<DroplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
