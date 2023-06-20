import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixQuiPrendComponent } from './six-qui-prend.component';

describe('SixQuiPrendComponent', () => {
  let component: SixQuiPrendComponent;
  let fixture: ComponentFixture<SixQuiPrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixQuiPrendComponent]
    });
    fixture = TestBed.createComponent(SixQuiPrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
