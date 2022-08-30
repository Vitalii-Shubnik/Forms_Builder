import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';
import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockStore = jasmine.createSpyObj('Store', ['dispatch', 'select'])

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        PushModule,
        MatButtonModule
      ],
      providers: [
        { provide: Store, useValue: mockStore }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);

    component = fixture.componentInstance;
  });

  beforeEach(()=>{
    mockStore.select
    .withArgs(selectAuthUsername).and.returnValue(of('user1'))
    .withArgs(selectIsLoggedIn).and.returnValue(of(true))
    fixture.detectChanges()

  })

  it('should display username', async () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(span?.textContent).toContain('user1')
  })

  it('should emit logout', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button')
    button.dispatchEvent(new Event('click'))
    expect(mockStore.dispatch).toHaveBeenCalled()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
