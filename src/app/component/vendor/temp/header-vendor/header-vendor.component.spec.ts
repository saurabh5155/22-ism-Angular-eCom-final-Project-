import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVendorComponent } from './header-vendor.component';

describe('HeaderVendorComponent', () => {
  let component: HeaderVendorComponent;
  let fixture: ComponentFixture<HeaderVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
