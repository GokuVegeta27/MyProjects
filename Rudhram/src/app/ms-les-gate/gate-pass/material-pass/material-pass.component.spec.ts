import { ComponentFixture, TestBed, fakeAsync, flush, tick, discardPeriodicTasks } from '@angular/core/testing';

import { MaterialPassComponent } from './material-pass.component';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('MaterialPassComponent', () => {
  let component: MaterialPassComponent;
  let fixture: ComponentFixture<MaterialPassComponent>;
  let datePipe: DatePipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,],
      declarations: [MaterialPassComponent],
      providers: [DatePipe, FormBuilder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialPassComponent);
    component = fixture.componentInstance;
    datePipe = TestBed.inject(DatePipe);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the visitTime property after 1000ms', fakeAsync(() => {


    // Trigger the setInterval function
    component.ngOnInit();

    tick(1000);

    // Verify the updated values
    const newTime = datePipe.transform(new Date(), 'HH:mm:ss ');
    const newDate = datePipe.transform(new Date(), 'dd/MM/yyyy');
    expect(component.form.controls['visitTime'].value).toEqual(newTime);
    expect(component.form.controls['visitDate'].value).toEqual(newDate);
    // Cleanup
    discardPeriodicTasks();
  }));
  it('should set vechileImage control value and picturePreview property', () => {
    const eventMock = {
      target: {
        files: [
          new File([''], 'test-image.jpg', { type: 'image/jpeg' })
        ]
      }
    };
    component.ngOnInit();

    component.selectImage(eventMock as any);

    expect(component.form.controls['vechileImage'].value).toBe('test-image.jpg');
    expect(component.picturePreview).toBeDefined();
    // Add additional expectations if needed
  });

  it('should not set vechileImage control value and picturePreview property if no file is selected', () => {
    const eventMock = {
      target: {
        files: []
      }
    };
    component.ngOnInit();

    component.selectImage(eventMock as any);

    expect(component.form.controls['vechileImage'].value).toBeNull();
    expect(component.picturePreview).toBe('');
    // Add additional expectations if needed
  });

  it('should set vechileDocument control value and picturePreview property', () => {
    const eventMock = {
      target: {
        files: [
          new File([''], 'test-image.jpg', { type: 'image/jpeg' })
        ]
      }
    };
    component.ngOnInit();

    component.selectDocImage(eventMock as any);

    expect(component.form.controls['vechileDocument'].value).toBe('test-image.jpg');
    expect(component.filePreview).toBeDefined();
    // Add additional expectations if needed
  });

  it('should not set vechileDocument control value and picturePreview property if no file is selected', () => {
    const eventMock = {
      target: {
        files: []
      }
    };
    component.ngOnInit();

    component.selectDocImage(eventMock as any);

    expect(component.form.controls['vechileDocument'].value).toBeNull();
    expect(component.filePreview).toBe('');
    // Add additional expectations if needed
  });
  it('should set id proof control value ', () => {
    const eventMock = {
      target: {
        files: [
          new File([''], 'test-image.jpg', { type: 'image/jpeg' })
        ]
      }
    };
    component.ngOnInit();

    component.seletIdProof(eventMock as any);

    expect(component.form.controls['driverId'].value).toBe('test-image.jpg');
    // Add additional expectations if needed
  });

  it('should not set id proof control value ', () => {
    const eventMock = {
      target: {
        files: []
      }
    };
    component.ngOnInit();

    component.seletIdProof(eventMock as any);

    expect(component.form.controls['driverId'].value).toBeNull();
    // Add additional expectations if needed
  });
});
