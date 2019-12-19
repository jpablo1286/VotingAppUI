import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPetComponent } from './voting-pet.component';

describe('VotingPetComponent', () => {
  let component: VotingPetComponent;
  let fixture: ComponentFixture<VotingPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
