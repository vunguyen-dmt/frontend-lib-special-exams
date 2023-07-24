import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';

const getCookie = (cookieName) => {
    const cookies = new Cookies();
    return cookies.get(cookieName);
}

export const transTime = (time) => {
    if(!time) {
        return time;
    }
    
    var lang = getCookie(getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME);
    if(lang !== 'vi') {
        return time;
    }

    const transDict = {
        'second': 'giây',
        'seconds' : 'giây',
        'minute': 'phút',
        'minutes': 'phút',
        'hour': 'giờ',
        'hours': 'giờ',
        'day': 'ngày',
        'days': 'ngày',
        'week': 'tuần',
        'weeks': 'tuần',
        'month': 'tháng',
        'months': 'tháng',
        'year': 'năm',
        'years': 'năm'
    };

    var splitted = time.split(' ');
    var out = [];
    for(var i = 0; i < splitted.length; i ++) {
        if(splitted[i] in transDict) {
            out.push(transDict[splitted[i]])
        } else {
            out.push(splitted[i]);
        }
    }
    return out.join(' ');
}