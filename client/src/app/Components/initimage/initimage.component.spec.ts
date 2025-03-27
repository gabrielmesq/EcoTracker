import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitimageComponent } from './initimage.component';

describe('InitimageComponent', () => {
  let component: InitimageComponent;
  let fixture: ComponentFixture<InitimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
