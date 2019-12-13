import { ChipType, ChipListAlign, ChipListSelectable } from './chips.enum';
import { InputEventType } from '../form-elements/form-elements.enum';
import { Icons } from '../icons/icons.enum';

export interface Chip {
  text: string;
  id?: string | number;
  type?: ChipType;
  imageSource?: string;
  removable?: boolean;
  disabled?: boolean;
  selected?: boolean;
  icon?: Icons;
}

export interface ChipListConfig {
  type?: ChipType;
  removable?: boolean;
  selectable?: boolean | ChipListSelectable;
  focusable?: boolean;
  disabled?: boolean;
  align?: ChipListAlign;
}

export interface ChipKeydownEvent {
  event: KeyboardEvent;
  chip: Chip;
}

export interface ChipInputChange {
  value: string[];
  added?: string;
  removed?: string;
  event?: InputEventType;
}
