import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Session } from "app/session/session";
import { restrictedWords } from "app/session/restricted-words";


@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  public newSessionForm: FormGroup
  public name: FormControl
  public presenter: FormControl
  public duration: FormControl
  public level: FormControl
  public abstract: FormControl

  public ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar']) ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  public saveSession(formValues) {
   
    let session:Session = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }

    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }

}
