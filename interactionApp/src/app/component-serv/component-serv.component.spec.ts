import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentServComponent } from './component-serv.component';

describe('ComponentServComponent', () => {
  let component: ComponentServComponent;
  let fixture: ComponentFixture<ComponentServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
