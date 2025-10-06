class ESLint {
  static version = '8.57.1';

  constructor(options = {}) {
    this.options = options;
  }

  async lintFiles() {
    return [];
  }

  async calculateConfigForFile() {
    return { plugins: [], rules: {} };
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
    return [];
  }
}

class CLIEngine {
  static version = ESLint.version;
}

module.exports = {
  ESLint,
  CLIEngine
};
