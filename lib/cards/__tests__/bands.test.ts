import { test } from "node:test";
import assert from "node:assert/strict";
import { linkTitleBand, pinTitleBand, figureBand, quoteBand, QUOTE_MAX } from "../bands.ts";

const s = (n: number) => "x".repeat(n);

test("link title bands switch at 40 and 80 chars", () => {
  assert.equal(linkTitleBand(s(40)).size, 76);
  assert.equal(linkTitleBand(s(41)).size, 62);
  assert.equal(linkTitleBand(s(80)).size, 62);
  assert.equal(linkTitleBand(s(81)).size, 54);
});

test("pin title bands switch at 24 and 50 chars", () => {
  assert.equal(pinTitleBand(s(24)).size, 96);
  assert.equal(pinTitleBand(s(25)).size, 82);
  assert.equal(pinTitleBand(s(51)).size, 70);
});

test("figure bands switch at 3 and 5 chars", () => {
  assert.equal(figureBand("41%").size, 300);
  assert.equal(figureBand("1 in 3").size, 210);
  assert.equal(figureBand("£120").size, 250);
});

test("quote over the max is refused", () => {
  assert.equal(quoteBand(s(QUOTE_MAX + 1)), null);
  assert.equal(quoteBand(s(120))?.size, 86);
  assert.equal(quoteBand(s(121))?.size, 72);
  assert.equal(quoteBand(s(201))?.size, 62);
});
