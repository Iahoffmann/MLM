import { uniqueId } from 'lodash';

export class Task {
    name = '';
    dueDate?: Date;
    done = false;
    id: string;

    constructor() {
        this.id = uniqueId();
    }
}
