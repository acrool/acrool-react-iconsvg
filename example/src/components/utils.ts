import {formatCurrency} from '@acrool/js-utils/number';
import {data, IPaginateData} from './data';

/**
 * Mock 排序
 * @param by
 * @param field
 * @param a
 * @param b
 */
export const mockSort = (by: string, field: string, a: IPaginateData, b: IPaginateData) => {

    const fieldName = field as keyof IPaginateData;

    if (a[fieldName] < b[fieldName]) {
        return by.toLowerCase() === 'asc' ? -1 : 1;
    }else if (a[fieldName] > b[fieldName]) {
        return by.toLowerCase() === 'asc' ?  1: -1;
    }
    // a 必須等於 b
    return 0;
};


/**
 * 計算金額
 * @param rows
 */
export const calcAmount = (rows: IPaginateData[]) => {
    return formatCurrency(rows.reduce((curr, row) => curr + row.amount,0));
};

