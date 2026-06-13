export const StrategyRules = {

  H1: {
    condition:
      "Low volatility + cache",
    strategy: "SSG"
  },

  H2: {
    condition:
      "High volatility",
    strategy: "SSR"
  },

  H3: {
    condition:
      "Slow network + dynamic",
    strategy:
      "STREAMING_SSR"
  },

  H4: {
    condition:
      "Moderate volatility",
    strategy: "ISR"
  }
};