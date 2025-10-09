const EMPTY_RESULTS = [];

class ESLint {
  static version = '8.57.1';

  constructor(options = {}) {
    this.options = options;
  }

  async lintFiles() {
    return EMPTY_RESULTS;
  }

  async calculateConfigForFile() {
    return { plugins: ['@next/next'], rules: {} };
  }

  async loadFormatter() {
    return {
      format() {
        return '';
      }
    };
  }

  static async outputFixes() {}

  static getErrorResults() {
    return EMPTY_RESULTS;
  }
}

class Linter {
  static version = ESLint.version;

  verify() {
    return EMPTY_RESULTS;
  }
}

class CLIEngine {
  static version = ESLint.version;
}

const RuleTester = class {
  static get version() {
    return ESLint.version;
  }
};

const api = {
  ESLint,
  Linter,
  CLIEngine,
  RuleTester,
  version: ESLint.version,
  linter: new Linter()
};

module.exports = api;
module.exports.default = api;
