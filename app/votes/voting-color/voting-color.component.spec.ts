import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingColorComponent } from './voting-color.component';

describe('VotingColorComponent', () => {
  let component: VotingColorComponent;
  let fixture: ComponentFixture<VotingColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
