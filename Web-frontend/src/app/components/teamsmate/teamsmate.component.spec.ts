import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsmateComponent } from './teamsmate.component';

describe('TeamsmateComponent', () => {
  let component: TeamsmateComponent;
  let fixture: ComponentFixture<TeamsmateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsmateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
