import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSawmillComponent } from './edit-sawmill.component';

describe('EditSawmillComponent', () => {
  let component: EditSawmillComponent;
  let fixture: ComponentFixture<EditSawmillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSawmillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSawmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
