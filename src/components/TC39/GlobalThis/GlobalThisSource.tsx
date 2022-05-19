class GlobalThisSource {
  getComparison() {
    return [
      this.constructor.name,
      globalThis.constructor.name,
      window.constructor.name,
    ];
  }
}

export const getGlobalThisComparison = () =>
  new GlobalThisSource().getComparison();
