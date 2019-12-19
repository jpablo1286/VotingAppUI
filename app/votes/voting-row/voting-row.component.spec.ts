import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingRowComponent } from './voting-row.component';

describe('VotingRowComponent', () => {
  let component: VotingRowComponent;
  let fixture: ComponentFixture<VotingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
