import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { tap, first, finalize } from "rxjs/operators";
import { loadAllCourses } from "./course.actions";
import { Observable } from "rxjs";

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return this.store
            .pipe(
                tap(() => {

                    if (!this.loading) {
                        this.loading = true;
                        this.store.dispatch(loadAllCourses())

                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );

    }

}