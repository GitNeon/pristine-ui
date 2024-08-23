import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('zh-cn');
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

export { dayjs };
