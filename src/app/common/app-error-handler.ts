import { ErrorHandler } from "@angular/core";

export class AppErrorHadler implements ErrorHandler {

    handleError(error: any): void {
        alert('Unexpected error occurerd.');
        throw new Error(error);
    }

}