import { uniqueId, isUndefined } from 'lodash';

export class Task {
    name = '';
    dueDate?: Date;
    done = false;
    id: string = uniqueId();

    constructor(init?: Partial<Task>) {
        Object.assign(this, {...init});
    }
}
