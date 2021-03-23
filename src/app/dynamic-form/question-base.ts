export class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    step?: number;
    min?: number;
    controlType: string;
    type: string;
    multiple: boolean;
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        multiple?: boolean;
        controlType?: string;
        type?: string;
        step?: number;
        min?: number;
        options?: {key: string, value: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.multiple = !!options.multiple;
      this.step = options.key == 'price' ? 0.01 : options.key == 'available_quantity' ? 0 : undefined;
      this.min = options.key == 'price' ? 0.00 : options.key == 'available_quantity' ? 0 : undefined;
    }
}
