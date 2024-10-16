import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {

    constructor(private astions$: Actions) {

        astions$.subscribe(action => {

            if (action.type == '[Login Page] User Login') {
                localStorage.setItem('user', JSON.stringify(action["user"]))

            }

        });

    }

}