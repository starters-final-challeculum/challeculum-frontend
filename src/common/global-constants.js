export const apiBaseUrl = 'http://15.152.200.75/api/v1';
export const categoryMap = new Map([
  ['', { id: '', name: '전체' }],
  ['1', { id: 'CATEGORY_IT', name: 'IT' }],
  ['2', { id: 'CATEGORY_LANGUAGE', name: '언어' }],
  ['3', { id: 'CATEGORY_CERTIFICATION', name: '자격증' }],
  ['4', { id: 'CATEGORY_SCHOOL', name: '중고등' }],
]);
export const groundStatus = {
  standby: 'GROUND_STANDBY',
  ongoing: 'GROUND_ONGOING',
  completed: 'GROUND_COMPLETED',
};

export const platforms = {
  udemy: 'PLATFORM_UDEMY',
  inflearn: 'PLATFORM_INFLEARN',
  coursera: 'PLATFORM_COURSERA',
};
