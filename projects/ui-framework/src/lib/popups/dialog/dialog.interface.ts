import { MatDialogConfig } from '@angular/material/dialog';

import { ButtonType } from '../../buttons/buttons.enum';
import { DialogSize } from './dialog.enum';

export interface DialogConfig extends MatDialogConfig {
  size?: DialogSize;
  panelClass?: string;
  data: any;
  disableClose?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnNavigation?: boolean;
}

export interface DialogButtons {
  ok?: DialogButton;
  cancel?: DialogButton;
  preloaderMessage?: string;
  confirmation?: DialogConfirmation;
}

export interface DialogButton {
  label: string;
  disabled?: boolean;
  class?: string;
  type?: ButtonType;
  action?(): any;
}

export interface DialogConfirmation {
  title?: string;
  subTitle?: string;
  buttonLabel?: string;
  buttonClass?: string;
  buttonType?: ButtonType;
}
