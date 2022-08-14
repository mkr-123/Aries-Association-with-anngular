import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocherComponent } from './vocher.component';

describe('VocherComponent', () => {
  let component: VocherComponent;
  let fixture: ComponentFixture<VocherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
