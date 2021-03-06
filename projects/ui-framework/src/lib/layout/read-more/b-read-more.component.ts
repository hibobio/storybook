import { merge, Observable, Subscription } from 'rxjs';
import { filter, skip, take, tap, throttleTime } from 'rxjs/operators';

import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { LinkColor } from '../../indicators/link/link.enum';
import { DOMhelpers } from '../../services/html/dom-helpers.service';
import { InputObservable } from '../../services/utils/decorators';
import { closestDivisable } from '../../services/utils/functional-utils';
import { MutationObservableService } from '../../services/utils/mutation-observable';
import { UtilsService } from '../../services/utils/utils.service';
import { DOMMouseEvent } from '../../types';

export interface ReadMoreConfig {
  maxLines?: number;
  maxHeight?: number;
  expandable?: boolean;
  watchClicks?: 'text' | 'read-more' | boolean;
  expectChanges?: boolean;
  trustCssVars?: boolean;
  dynamicFontSize?: boolean;
}

export const READ_MORE_CONFIG_DEF: ReadMoreConfig = {
  maxLines: 10,
  maxHeight: null,
  expandable: true,
  watchClicks: false,
  expectChanges: false,
  trustCssVars: true,
  dynamicFontSize: false,
};

@Component({
  selector: 'b-read-more',
  styleUrls: ['./b-read-more.component.scss'],
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
    <b-text-button
      *ngIf="needsReadMoreButton"
      class="read-more-button mrg-t-8"
      [color]="linkColor.primary"
      [text]="'Read More'"
      (clicked)="onReadMoreClicked($event)"
    ></b-text-button>
  `,
})
export class BReadMoreComponent implements OnInit, OnDestroy {
  constructor(
    private host: ElementRef<HTMLElement>,
    private zone: NgZone,
    private DOM: DOMhelpers,
    private utilsService: UtilsService,
    private mutationObservableService: MutationObservableService
  ) {
    this.hostEl = this.host.nativeElement;
  }

  private hostEl: HTMLElement;
  private contentEl: HTMLElement;
  private updater: Subscription;
  public needsReadMoreButton = false;
  readonly linkColor = LinkColor;

  // tslint:disable-next-line: no-input-rename
  @InputObservable({ ...READ_MORE_CONFIG_DEF })
  @Input('config')
  config$: Observable<ReadMoreConfig>;
  private config: ReadMoreConfig = READ_MORE_CONFIG_DEF;

  @Output() clicked: EventEmitter<'text' | 'read-more'> = new EventEmitter();

  @HostListener('click.outside-zone')
  onHostClick() {
    if (
      this.clicked.observers.length &&
      this.config?.watchClicks !== 'read-more' &&
      this.config?.watchClicks !== false
    ) {
      this.zone.run(() => {
        this.clicked.emit('text');
      });
    }
  }

  ngOnInit(): void {
    this.contentEl = this.hostEl.children[0] as HTMLElement;

    this.updater = merge(
      this.config$.pipe(
        tap((config: ReadMoreConfig) => {
          this.config = { ...READ_MORE_CONFIG_DEF, ...config };
          this.DOM.setAttributes(this.hostEl, {
            'data-clickable': this.config.watchClicks,
          });
        })
      ),

      this.mutationObservableService
        .getMutationObservable(this.hostEl, {
          characterData: true,
          childList: true,
          subtree: true,
          attributes: false,
          mutations: 'processed',
        })
        .pipe(this.config?.expectChanges ? tap() : take(3)),

      this.mutationObservableService.getResizeObservervable(this.hostEl, {
        watch: this.config?.dynamicFontSize ? 'both' : 'height',
        threshold: 5,
      }),

      this.utilsService.getResizeEvent(true).pipe(
        skip(1),
        filter(() => Boolean(this.config?.dynamicFontSize))
      )
    )
      .pipe(
        throttleTime(200, undefined, {
          leading: false,
          trailing: true,
        }),
        filter(() => Boolean(this.contentEl?.children.length))
      )
      .subscribe(() => {
        this.checkStuff();
      });
  }

  checkStuff() {
    this.DOM.setAttributes(this.hostEl, {
      'data-readmore':
        (this.needsReadMoreButton =
          this.contentEl.scrollHeight > this.contentEl.offsetHeight) + '',
    });

    let deepEl = this.contentEl;
    while (deepEl.children.length === 1) {
      deepEl = deepEl.children[0] as HTMLElement;
    }
    const textProps = this.DOM.getElementTextProps(deepEl);

    this.DOM.setCssProps(this.contentEl, {
      '--max-height':
        Math.floor(
          closestDivisable(
            this.config.maxHeight ||
              Math.floor(
                textProps.lineHeight * textProps.fontSize * this.config.maxLines
              ),
            Math.floor(textProps.fontSize * textProps.lineHeight)
          )
        ) + 'px',
      '--line-height': textProps.lineHeight,
      '--font-size': textProps.fontSize + 'px',
    });
  }

  onReadMoreClicked(event: DOMMouseEvent) {
    if (
      this.clicked.observers.length &&
      this.config?.watchClicks !== 'text' &&
      this.config?.watchClicks !== false
    ) {
      event.stopPropagation();
      this.clicked.emit('read-more');
    }

    if (!this.config?.expandable) {
      return;
    }

    this.ngOnDestroy();

    this.DOM.setCssProps(this.contentEl, {
      transition: 'max-height 0.3s',
      '--max-height': this.contentEl.scrollHeight + 100 + 'px',
    });

    this.DOM.setAttributes(this.hostEl, {
      'data-readmore': (this.needsReadMoreButton = false),
    });
  }

  ngOnDestroy(): void {
    this.updater?.unsubscribe();
  }
}
