import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasOverviewComponent } from './canvas-overview.component';

describe('CanvasOverviewComponent', () => {
  let component: CanvasOverviewComponent;
  let fixture: ComponentFixture<CanvasOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
