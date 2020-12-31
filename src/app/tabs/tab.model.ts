export interface ITab {
    route: string;
    icon: string;
    label?: string;
}

export class Tab {

    constructor(
        public route: string,
        public icon: string,
        public label: string = null
    ) { };
}