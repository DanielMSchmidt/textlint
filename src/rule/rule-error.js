// LICENSE : MIT
'use strict';
class RuleError {
    /**
     * RuleError is like Error object.
     * It's used for adding to TextLintResult.
     * @param {string} message error message should start with lowercase letter
     * @param {object|number} [paddingLocation] - the object has padding {line, column} for actual error reason
     * @constructor
     */
    constructor(message, paddingLocation) {
        this.message = message;
        if (typeof paddingLocation === 'object') {
            this.line = paddingLocation.line;
            // start with 0
            this.column = paddingLocation.column;    // start with 0
        } else if (typeof paddingLocation === 'number') {
            // this is deprecated
            // should pass padding as object.
            this.column = paddingLocation;
        }
    }

    toString() {
        return `${ this.column }:${ this.line }:<RuleError>${ this.message } @:${ this.line ? this.line + ':'
            : '' }${ this.column ? this.column + ':' : '' }`;
    }
}
module.exports = RuleError;