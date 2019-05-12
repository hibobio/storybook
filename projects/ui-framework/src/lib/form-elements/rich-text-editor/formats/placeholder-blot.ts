import Quill from 'quill';

const Inline = Quill.import('blots/inline');

export class PlaceholderBlot extends Inline {
  static blotName = 'Placeholder';
  static tagName = 'span';

  static create(id: string) {
    const node: HTMLElement = super.create();
    node.setAttribute('data-placeholder-id', id);
    node.setAttribute('contenteditable', 'false');
    return node;
  }

  static formats(node: HTMLElement) {
    return node.getAttribute('data-placeholder-id');
  }
}
