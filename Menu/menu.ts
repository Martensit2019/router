import { ILink } from '@/components/common/interfaceCommon'

export const authLinks: ILink[] = [
  {
    id: 1,
    icon: 'search',
    title: 'Поиск',
    slug: 'search',
    children: [
      {
        id: 23,
        title: 'react',
        slug: '/react-counter',
        permissions: ['free_access'],
      },
      {
        title: 'Элементы',
        slug: '/search/elements',
        id: 'search-elements',
        permissions: ['free_access'],
      },
      {
        title: 'Модели',
        slug: '/search/models',
        id: 'search-models',
        permissions: ['free_access'],
      },
      {
        title: 'Сборки',
        slug: '/search/assemblies',
        id: 'search-assemblies',
        permissions: ['free_access'],
      },
      {
        title: 'Проекты',
        slug: '/search/projects',
        id: 'search-projects',
        permissions: ['free_access'],
      },
      {
        title: 'Сборки релизов',
        slug: '/search/release-builds',
        id: 'search-release-builds',
        permissions: ['free_access'],
      },
    ],
  },
  {
    id: 2,
    icon: 'folder',
    title: 'Библиотека',
    slug: 'library',
    children: [
      {
        title: 'Карточка',
        slug: '/library/card',
        id: 'elements-card',
        permissions: ['free_access'],
      },
      {
        title: 'Создание',
        slug: '/library/create',
        id: 'elements-create',
        permissions: ['free_access'],
      },
      {
        title: 'В работе',
        slug: '/library/working',
        id: 'working',
        permissions: ['free_access'],
      },
      {
        title: 'Утверждение',
        slug: '/library/submit',
        id: 'submit',
        permissions: ['free_access'],
      },
      {
        title: 'Очередь на публикацию',
        slug: '/library/approve',
        id: 'approve',
        permissions: ['free_access'],
      },
      {
        title: 'Публикация',
        slug: '/library/publication',
        id: 'publication',
        permissions: ['free_access'],
      },
      {
        title: 'Закрытые периоды',
        slug: '/library/closed-periods',
        id: 'closed-periods',
        permissions: ['free_access'],
      },
      {
        title: 'Архив',
        slug: '/library/archive',
        id: 'archive',
        permissions: ['free_access'],
      },
      {
        title: 'Сравнить',
        slug: '/library/matching',
        id: 'matching',
        permissions: ['free_access'],
      },
      {
        title: 'Реестр Модели',
        slug: '/library/models',
        id: 'models',
        permissions: ['free_access'],
      },
      {
        title: 'Настройки',
        slug: '/library/settings',
        id: 'settings',
        permissions: ['free_access'],
      },
    ],
  },
  {
    id: 3,
    icon: 'stack',
    title: 'Сборки',
    slug: 'assemblies',
    children: [
      {
        title: 'Сборки',
        slug: '/assemblies',
        id: 'editing',
        permissions: ['free_access'],
      },
      {
        title: 'Создать Сборку',
        slug: '/assemblies/view',
        id: 'view',
        permissions: ['free_access'],
      },
    ],
  },
  {
    id: 4,
    icon: 'file',
    title: 'Ведомость объема работ',
    slug: 'scope-work',
    children: [
      {
        title: 'Создание',
        slug: '/scope-work/creation',
        id: 'creation',
        permissions: ['free_access'],
      },
      {
        title: 'Редактирование',
        slug: '/scope-work/editing',
        id: 'editing',
        permissions: ['free_access'],
      },
    ],
  },
  {
    id: 5,
    icon: 'admin',
    title: 'Администриров...е',
    slug: 'administration',
    children: [
      {
        id: 6,
        title: 'Справочники',
        slug: 'administration/catalog',
        permissions: ['free_access'],
        children: [
          {
            title: 'Справочники Системы',
            slug: '/administration/references',
            id: 'references',
            permissions: ['free_access'],
          },
          {
            title: 'Управление Справочниками',
            slug: '/administration/references-management',
            id: 'references-management',
            permissions: ['free_access'],
            children: [
              {
                title: 'Создать Справочник',
                slug: '/administration/create-reference',
                id: 'create-references',
                permissions: ['free_access'],
              },
              {
                title: 'Удалить Справочник',
                slug: '/administration/delete-reference',
                id: 'delete-reference',
                permissions: ['free_access'],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        title: 'Общие',
        slug: 'administration/catalog',
        permissions: ['free_access'],
        children: [
          {
            title: 'Справочник пользователей',
            slug: '/administration/users',
            id: 'users',
            permissions: [
              'add_user',
              'change_user',
              'view_user',
              'view_users',
              'delete_users',
            ],
          },
          {
            title: 'Справочник ролей',
            slug: '/administration/roles-catalog',
            id: 'roles-catalog',
            permissions: [
              'add_role',
              'change_role',
              'delete_role',
              'view_role',
              'add_group',
              'change_group',
              'delete_group',
              'view_group',
            ],
          },
          {
            title: 'Справочник организаций',
            slug: '/administration/organizations',
            id: 'organizations',
            permissions: [
              'add_organization',
              'change_organization',
              'delete_organization',
              'view_organization',
              'view_organizations',
            ],
          },
          {
            title: 'Журнал аудита доступа',
            slug: '/administration/log-auth',
            id: 'log_auth',
            permissions: ['view_log_auth'],
          },
          {
            title: 'Журнал изменений пользователей',
            slug: '/administration/log-users',
            id: 'journal',
            permissions: ['view_log_change_user'],
          },
          {
            title: 'Журнал изменений ролей',
            slug: '/administration/log-groups',
            id: 'log-groups',
            permissions: ['view_log_change_role', 'view_log_change_group'],
          },
        ],
      },
    ],
  },
]

export const noAuthLinks: ILink[] = [
  {
    id: 1,
    icon: 'search',
    title: 'Поиск',
    slug: 'search',
    children: [
      {
        title: 'Элементы',
        slug: '/search/elements',
        id: 'search-elements',
        permissions: ['free_access'],
      },
    ],
  },
  {
    id: 2,
    icon: 'folder',
    title: 'Библиотека',
    slug: 'library',
    children: [
      {
        title: 'Публикация',
        slug: '/library/publication',
        id: 'publication',
        permissions: [],
      },
    ],
  },
]
