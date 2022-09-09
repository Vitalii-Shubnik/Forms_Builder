import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'

@Component({
  selector: 'app-first-section',
  template: '<p>Mock First Section Component</p>'
})
class MockFirstSectionComponent {}

@Component({
  selector: 'app-second-section',
  template: '<p>Mock Second Section Component</p>'
})
class MockSecondSectionComponent {}

@Component({
  selector: 'app-third-section',
  template: '<p>Mock Third Section Component</p>'
})
class MockThirdSectionComponent {}

@Component({
  selector: 'app-navbar',
  template: '<p>Mock Navbar Component</p>'
})
class MockNavbarComponent {}

fdescribe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockFirstSectionComponent,
        MockSecondSectionComponent,
        MockThirdSectionComponent,
        MockNavbarComponent
      ],
      imports:[]
    })
      .compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
