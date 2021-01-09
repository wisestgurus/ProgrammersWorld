import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'pw-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private timerService: TimerService,
    private dialog: MatDialog) { }

  @ViewChild('timerInstructionRef', { static: true }) timerInstructionRef;
  @ViewChild('timerSettingsRef', { static: true }) timerSettingsRef;

  minutesRemaining;
  secondsRemaining;
  timeRemaining;
  timerInstructionDialog;
  timerSettingsDialog;
  time;
  isPlaying;

  timer(initialMinutes, timerDialog) {
    let initialMinutesToSeconds = initialMinutes * 60;
    let minutes;
    let seconds;

    this.time = this.timerService.timer(1000).subscribe(
      (a) => {
        minutes = Math.floor((initialMinutesToSeconds / 60));
        seconds = Math.floor((initialMinutesToSeconds % 60));
        this.timeRemaining = initialMinutesToSeconds;
        this.minutesRemaining = this.timerService.IsTimeLessThan10(minutes);
        this.secondsRemaining = this.timerService.IsTimeLessThan10(seconds);

        (initialMinutesToSeconds > 0) ? initialMinutesToSeconds-- : this.time.unsubscribe();
        console.log(a);
      });
    timerDialog.closeAll();
  }

  openTimerInstruction() {
    this.timerInstructionDialog = this.dialog.open(this.timerInstructionRef, { width: '100%' });
  }

  openTimerSettings() {
    this.timerSettingsDialog = this.dialog.open(this.timerSettingsRef, { width: '100%' });
  }

  startWorkTime(initialMinutes) {
    this.timer(initialMinutes, this.dialog);
    this.isPlaying = true;
  }

  startShortBreakTime(initialMinutes) {
    this.timer(initialMinutes, this.dialog);
    this.isPlaying = true;
  }

  startLongBreakTime(initialMinutes) {
    this.timer(initialMinutes, this.dialog);
    this.isPlaying = true;
  }

  pauseTime() {
    this.isPlaying = false;
    this.time.unsubscribe();
  }

  playTime() {
    let minutes;
    let seconds;
    this.isPlaying = true;
    this.time = this.timerService.timer(1000).subscribe(

      (a) => {
        minutes = Math.floor((this.timeRemaining / 60));
        seconds = Math.floor((this.timeRemaining % 60));
        this.minutesRemaining = this.timerService.IsTimeLessThan10(minutes);
        this.secondsRemaining = this.timerService.IsTimeLessThan10(seconds);

        (this.timeRemaining > 0) ? this.timeRemaining-- : this.time.unsubscribe();
        console.log(a);
      })

    this.dialog.closeAll();
  }

  stopTime() {
    this.time.unsubscribe();
    this.timeRemaining = undefined;
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
