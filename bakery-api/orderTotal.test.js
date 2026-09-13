import { describe, it, expect } from "vitest";
import { orderTotal } from "./orderTotal.js";

describe("orderTotal", () => {
  it("calculates subtotal with delivery fee", () => {
    expect(orderTotal(500, 4)).toBe(3000);
  });

  it("gives free delivery at exactly 10000 FCFA", () => {
    expect(orderTotal(500, 20)).toBe(10000);
  });

  it("gives free delivery above 10000 FCFA", () => {
    expect(orderTotal(1000, 15)).toBe(15000);
  });

  it("handles zero quantity", () => {
    expect(orderTotal(500, 0)).toBe(1000);
  });

  it("rejects negative quantities", () => {
    expect(() => orderTotal(500, -1)).toThrow();
  });

  it("rejects another negative quantity", () => {
    expect(() => orderTotal(1000, -5)).toThrow();
  });
});