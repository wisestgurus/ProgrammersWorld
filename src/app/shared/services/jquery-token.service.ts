import { Injectable, InjectionToken } from '@angular/core';


export const JQUERY_TOKEN = new InjectionToken<any>('JQUERY_TOKEN', { providedIn: 'root', factory: () => {
  return window['$'];
 } })