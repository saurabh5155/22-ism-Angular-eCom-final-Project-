import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyEmailVerifyComponent } from './only-email-verify.component';

describe('OnlyEmailVerifyComponent', () => {
  let component: OnlyEmailVerifyComponent;
  let fixture: ComponentFixture<OnlyEmailVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyEmailVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyEmailVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
