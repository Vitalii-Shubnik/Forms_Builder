import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushModule } from '@ngrx/component';
import { AvailableItems } from 'src/app/core/enums/availableItem';
import { DroplistModule } from '../droplist/droplist.module';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

import { ThirdSectionComponent } from './third-section.component';

fdescribe('ThirdSectionComponent', () => {
  let component: ThirdSectionComponent;
  let fixture: ComponentFixture<ThirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThirdSectionComponent
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatSelectModule,
        PushModule,
        MatIconModule,
        DroplistModule,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return false as noReturnPredicate return value', () => {
    expect(component.noReturnPredicate()).toBeFalse()
  })

  it('should add element to list', () => {
    const currentLength = component.available.length
    component.elementToAdd = AvailableItems.button
    component.add()
    expect(component.available.length).toBe(currentLength + 1)
    expect(component.available[currentLength]).toEqual({ type: AvailableItems.button, data: '' })
  })

  it('should move item to another droplist', () => {
    pending()
  })  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
