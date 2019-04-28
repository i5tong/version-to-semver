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
 * @param {object} object 版本信息
 * @param {number} order 排序 1:正序 -1:倒序
 * @author i5tong i5tong@sian.cn
 * @private
 */
const _sortObject = (object, order = 1) => {
  object.sort((objA, objB) => _sort(objA, objB, order));
};

exports.sort = _sort;
exports.sortObject = _sortObject;