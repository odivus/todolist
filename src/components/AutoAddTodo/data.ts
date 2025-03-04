interface DataItem {
  name: string;
  priority: string;
  description: string;
}

export const data: DataItem[] = [
  {
    name: 'Создание адаптивного дизайна',
    description: 'Разработать адаптивный дизайн для сайта, чтобы он корректно отображался на разных устройствах',
    priority: 'Низкий',
  },
  {
    name: 'Реализация авторизации',
    description: 'Создать систему авторизации пользователей с использованием JWT или другого подхода',
    priority: 'Средний',
  },
  {
    name: 'Оптимизация производительности',
    description: 'Провести оптимизацию кода и ресурсов для улучшения скорости загрузки страниц',
    priority: 'Высокий',
  },
  {
    name: 'Разработка компонента календаря',
    description: 'Создать компонент календаря для выбора дат с возможностью настроек',
    priority: 'Низкий',
  },
  {
    name: 'Интеграция с API',
    description: 'Настроить запросы к API для получения и отправки данных',
    priority: 'Средний',
  },
  {
    name: 'Реализация поиска по сайту',
    description: 'Создать функцию поиска по содержимому сайта с фильтрацией результатов',
    priority: 'Средний',
  },
  {
    name: 'Создание модального окна',
    description: 'Разработать модальное окно для отображения важной информации или форм',
    priority: 'Низкий',
  },
  {
    name: 'Реализация drag-and-drop',
    description: 'Внедрить функцию перетаскивания элементов на странице',
    priority: 'Низкий',
  },
  {
    name: 'Настройка анимаций и переходов',
    description: 'Добавить анимации и переходы для улучшения пользовательского опыта',
    priority: 'Низкий',
  },
  {
    name: 'Тестирование и отладка',
    description: 'Провести тестирование и отладку кода для выявления и исправления ошибок',
    priority: 'Высокий',
  },
];

