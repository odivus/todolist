interface DataItem {
  name: string;
  priority: string;
  description: string;
}

export const data: DataItem[] = [
  {
    name: 'Создание адаптивного дизайна',
    description: 'Разработать адаптивный дизайн для сайта',
    priority: 'low',
  },
  {
    name: 'Реализация авторизации',
    description: 'Создать систему авторизации пользователей',
    priority: 'medium',
  },
  {
    name: 'Оптимизация производительности',
    description: 'Провести оптимизацию кода и ресурсов для улучшения скорости загрузки страниц',
    priority: 'high',
  },
  {
    name: 'Разработка компонента календаря',
    description: 'Создать компонент календаря',
    priority: 'low',
  },
  {
    name: 'Интеграция с API',
    description: 'Настроить запросы к API',
    priority: 'medium',
  },
  {
    name: 'Реализация поиска по сайту',
    description: 'Создать функцию поиска по содержимому сайта с фильтрацией результатов',
    priority: 'medium',
  },
  {
    name: 'Создание модального окна',
    description: 'Разработать модальное окно',
    priority: 'low',
  },
  {
    name: 'Реализация drag-and-drop',
    description: 'Внедрить функцию перетаскивания элементов на странице',
    priority: 'low',
  },
  {
    name: 'Настройка анимаций и переходов',
    description: 'Добавить анимации и переходы',
    priority: 'low',
  },
  {
    name: 'Тестирование и отладка',
    description: 'Провести тестирование и отладку кода',
    priority: 'high',
  },
];

