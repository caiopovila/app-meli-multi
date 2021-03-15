export class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    multiple: boolean;
    options: {key: string, value: string}[];
    exec: any
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        multiple?: boolean;
        controlType?: string;
        type?: string;
        options?: {key: string, value: string}[];
        exec?: any;
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
      this.exec = options.exec;
    }
}