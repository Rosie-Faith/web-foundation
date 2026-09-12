import { describe, it, expect } from "vitest";
import { orderTotal } from "./orderTotal.js";

describe("orderTotal", () => {
  it("calculates subtotal with delivery fee", () => {
    expect(orderTotal(500, 4)).toBe(2500);
  });

  it("gives free delivery at 10000 FCFA", () => {
    expect(orderTotal(500, 20)).toBe(10000);
  });

  it("gives free delivery above 10000 FCFA", () => {
    expect(orderTotal(1000, 15)).toBe(15000);
  });

  it("handles quantity of zero", () => {
    expect(orderTotal(500, 0)).toBe(500);
  });

  it("rejects negative quantities", () => {
    expect(() => orderTotal(500, -1)).toThrow();
  });

  it("rejects negative prices", () => {
    expect(() => orderTotal(-500, 2)).toThrow();
  });

  it("rejects non-number price", () => {
    expect(() => orderTotal("500", 2)).toThrow();
  });

  it("rejects non-number quantity", () => {
    expect(() => orderTotal(500, "2")).toThrow();
  });
});