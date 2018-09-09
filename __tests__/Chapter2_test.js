// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Chapter2_NamesAndFunctions$MyFirstApp = require("../src/Chapter2_NamesAndFunctions.js");

describe("multiplyByTen", (function () {
        return Jest.test("with 10", (function () {
                      return Jest.Expect[/* toBe */2](100, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.multiplyByTen(10)));
                    }));
      }));

describe("nonZero", (function () {
        Jest.test("0 0", (function () {
                return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.nonZero(0, 0)));
              }));
        Jest.test("0 1", (function () {
                return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.nonZero(0, 1)));
              }));
        return Jest.test("1 1", (function () {
                      return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.nonZero(1, 1)));
                    }));
      }));

describe("sum", (function () {
        Jest.test("1", (function () {
                return Jest.Expect[/* toBe */2](1, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.sum(1)));
              }));
        Jest.test("2", (function () {
                return Jest.Expect[/* toBe */2](3, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.sum(2)));
              }));
        return Jest.test("0", (function () {
                      return Jest.Expect[/* toBe */2](0, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.sum(0)));
                    }));
      }));

describe("power", (function () {
        Jest.test("2, 2", (function () {
                return Jest.Expect[/* toBe */2](4, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.power(2, 2)));
              }));
        Jest.test("2, 0", (function () {
                return Jest.Expect[/* toBe */2](1, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.power(2, 0)));
              }));
        return Jest.test("2. -1.", (function () {
                      return Jest.Expect[/* toBe */2](0.5, Jest.Expect[/* expect */0](Chapter2_NamesAndFunctions$MyFirstApp.power(2, -1)));
                    }));
      }));

/*  Not a pure module */