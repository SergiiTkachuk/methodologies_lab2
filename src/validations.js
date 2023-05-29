'use strict';

function validateIndex(index, length) {
    if (typeof index !== 'number') {
        throw new Error('Index must be a number');
    }
    if (index < 0 || index >= length) {
        throw new Error('Index out of range');
    }
}

function validateCharType(value) {
    if (typeof value !== 'string' || value.length !== 1) {
        throw new Error('Wrong element type');
    }
}

module.exports = { validateIndex, validateCharType };