'use strict';

/**
 *
 * @param {string} versionA 版本A 1.0.0
 * @param {string} versionB 版本B 1.0.1
 * @param {number} order 排序 1:正序 -1:倒序
 * @return {number} 排序 0、1、-1
 * @author i5tong i5tong@sian.cn
 * @private
 */
const _sort = (versionA, versionB, order = 1) => {
  if (order !== 1) {
    const tempVersionA = versionB;
    versionB = versionA;
    versionA = tempVersionA;
  }
  const itemsA = versionA.split('.');
  const itemsB = versionB.split('.');
  let v = 0;
  for (const i in itemsA) {
    const a = itemsA[i];
    const b = itemsB[i];
    if (typeof a === undefined) {
      v = -1;
      break;
    } else if (typeof b === undefined) {
      v = 1;
      break;
    } else {
      if (a === b) continue;
      v = Number(a) - Number(b);
      break;
    }
  }
  return v;
};

/**
 *
 * @param {array} arr 版本信息数组 [ { version: '1.0.1' }, { version: '1.2.1' } ]
 * @param {number} order 排序 1:正序 -1:倒序
 * @author i5tong i5tong@sian.cn
 * @private
 */
const _sortArrayObj = (arr, options = { key, order }) => {
  const { key, order = 1 } = options;
  arr.sort((objA, objB) => _sort(objA[key], objB[key], order));
  return arr;
};

/**
 *
 * @param {array} arr 版本信息数组 [ '1.0.1', '1.2.1' ]
 * @param {number} order 排序 1:正序 -1:倒序
 * @author i5tong i5tong@sian.cn
 * @private
 */
const _sortArray = (arr, options) => {
  const { order = 1 } = options;
  arr.sort((objA, objB) => _sort(objA, objB, order));
  return arr;
};

exports.sortArray = _sortArray;
exports.sortArrayObj = _sortArrayObj;
