interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
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

function generateMenu(list: IMenuItem[]): string {
    const step = list.map<string>((val: IMenuItem) => {
        const { title, items } = val;

        if (!items) return `<li><a>${title}</a></li>`;

        return `
            <li>
                <a class="title">${title}</a>
                ${ generateMenu(items) }
            </li>`;
    }).join("");

    return `<ul>${step}</ul>`;
}

const navMenuList: HTMLDivElement | null = document.querySelector(".menu");

if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
        navMenuList.onclick = (ev: MouseEvent) => {
            const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
            const classList = el.classList;
            if (!classList.contains("title")) {
                return;
            }
            const parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle("menu-open");
        };
}
