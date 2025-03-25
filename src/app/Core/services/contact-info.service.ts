import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

   // Declare global variables
   email: string = "mrdbrainstech@hotmail.com";
   phoneNo: string = "+91 955-593-7114";
 
   constructor() { }
}
