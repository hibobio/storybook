import { InputEventType } from './input.enum';

export interface InputEvent {
  event: InputEventType;
  value: any;
}
