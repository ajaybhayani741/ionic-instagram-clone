import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(
    ) { }

    static createMockImages(n: number) {
        const result = [];

        for (let index = 0; index < n; index++) {
            const id = (index + 1);
            result.push({
                id,
                url: `url(https://picsum.photos/120?id=${id})`
            });

        }

        return result;
    }
}
