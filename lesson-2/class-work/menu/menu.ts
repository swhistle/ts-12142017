type MenuList = {
  title: string;
  link?: string;
  items?: MenuList;
}[];
type MenuOpt = {
  element: HTMLElement,
  menuList: MenuList,
};

const menuList: MenuList = [
  {
    title: 'Животные',
    items: [
      {
        title: 'Млекопитающие',
        items: [
          { title: 'Коровы' },
          { title: 'Ослы' },
          { title: 'Собаки' },
          { title: 'Тигры' }
        ]
      },
      {
        title: 'Другие',
        items: [
          { title: 'Змеи' },
          { title: 'Птицы' },
          { title: 'Ящерицы' },
        ],
      },
    ]
  },
  {
    title: 'Рыбы',
    items: [
      {
        title: 'Аквариумные',
        items: [
          { title: 'Гуппи' },
          { title: 'Скалярии' }
        ]
      },
      {
        title: 'Форель',
        items: [
          { title: 'Морская форель' }
        ]
      },
    ]
  }
];

abstract class MenuGenerator {
  protected abstract _clickHandler(this: HTMLElement, ev: MouseEvent): void;

  protected abstract _generateMenu(menuList: MenuList): string;
}

class Menu extends MenuGenerator {

  public constructor(
    opt: MenuOpt
  ) {
    super();
    opt.element.innerHTML = this._generateMenu(opt.menuList);
    opt.element.addEventListener('click', this._clickHandler);
  }

  protected _clickHandler(this: void, ev: MouseEvent): void {
    const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
    const classList: DOMTokenList = el.classList;
    if (!classList.contains('title')) {
      return;
    }
    const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
  }

  protected _generateMenu(list: MenuList): string {
    let content: string = `<ul>`;
    for (const a of list) {
      content += `<li><a ${a.items ? 'class=title' : ''}
      ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;
      if (!a.items) {
        content += `</li>`;
        continue;
      }
      content += `${this._generateMenu(a.items)}</li>`;
    }
    return `${content}</ul>`;
  }
}

const element: HTMLElement = document.querySelector('.menu') as HTMLElement;
const nav: Menu = new Menu({
  element,
  menuList
});