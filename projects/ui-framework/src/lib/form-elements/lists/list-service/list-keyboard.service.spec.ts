import { TestBed } from '@angular/core/testing';
import { ListModelService } from './list-model.service';
import { ListKeyboardService, NavigationKeys } from './list-keyboard.service';
import { LIST_EL_HEIGHT } from '../list.consts';

describe('ListModelService', () => {
  let listKeyboardService: ListKeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListKeyboardService,
      ]
    });

    listKeyboardService = TestBed.get(ListKeyboardService);
  });

  describe('getKeyboardNavigationObservable', () => {
    it('should return observable filtered by keys', () => {
      const observable = listKeyboardService.getKeyboardNavigationObservable();
      expect(observable).toBeTruthy();
    });
  });

  describe('getNextFocusIndex', () => {
    it('should return 1 when focusIndex=0, listLength=8 NavigationKeys.down', () => {
      const focusIndex = 0;
      const listLength = 8;
      const navKey = NavigationKeys.down;
      const nextFocusIndex = listKeyboardService.getNextFocusIndex(navKey, focusIndex, listLength);
      expect(nextFocusIndex).toEqual(1);
    });
    it('should return 0 when focusIndex=7, listLength=8 NavigationKeys.down', () => {
      const focusIndex = 7;
      const listLength = 8;
      const navKey = NavigationKeys.down;
      const nextFocusIndex = listKeyboardService.getNextFocusIndex(navKey, focusIndex, listLength);
      expect(nextFocusIndex).toEqual(0);
    });
    it('should return 1 when focusIndex=2, listLength=8 NavigationKeys.up', () => {
      const focusIndex = 2;
      const listLength = 8;
      const navKey = NavigationKeys.up;
      const nextFocusIndex = listKeyboardService.getNextFocusIndex(navKey, focusIndex, listLength);
      expect(nextFocusIndex).toEqual(1);
    });
    it('should return 7 when focusIndex=0, listLength=8 NavigationKeys.up', () => {
      const focusIndex = 0;
      const listLength = 8;
      const navKey = NavigationKeys.up;
      const nextFocusIndex = listKeyboardService.getNextFocusIndex(navKey, focusIndex, listLength);
      expect(nextFocusIndex).toEqual(7);
    });
  });

  describe('getScrollToIndex', () => {
    it('should return -6 when listHeight=LIST_EL_HEIGHT*8 and focusIndex=0', () => {
      const listHeight = LIST_EL_HEIGHT * 8;
      const focusIndex = 0;
      const scrollToIndex = listKeyboardService.getScrollToIndex(focusIndex, listHeight);
      expect(scrollToIndex).toEqual(-6);
    });
    it('should return 1 when listHeight=LIST_EL_HEIGHT*8 and focusIndex=7', () => {
      const listHeight = LIST_EL_HEIGHT * 8;
      const focusIndex = 7;
      const scrollToIndex = listKeyboardService.getScrollToIndex(focusIndex, listHeight);
      expect(scrollToIndex).toEqual(1);
    });
  });
});
