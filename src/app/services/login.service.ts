import { Injectable } from '@angular/core';

@Injectable( {providedIn: 'root'} )
export class LoginService {
    public UserName: string;

    constructor() {
        this.UserName = 'User1';
        console.log('LoginService.constructor().UserName=' + this.UserName);
    }

    getUserName() {
        console.log('LoginService.getUserName()=' + this.UserName);
        return (this.UserName);
    }

    setUserName(UserName: string) {
        this.UserName = UserName;
        console.log('LoginService.UserName=' + this.UserName);
    }
}



