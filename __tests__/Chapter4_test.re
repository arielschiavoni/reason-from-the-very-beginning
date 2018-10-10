open Jest;
open Chapter4_Making_lists;
open Expect;

describe("evens", () => {
  test("odd", () => expect(evens([2,4,2,4,2])) |> toEqual([4,4]));
  test("empty", () => expect(evens([])) |> toEqual([]));
  test("one", () => expect(evens([1])) |> toEqual([]));
  test("even", () => expect(evens([1,2])) |> toEqual([2]));
});

describe("evens_tail", () => {
  test("odd", () => expect(evens_tail([2,4,2,4,2])) |> toEqual([4,4]));
  test("empty", () => expect(evens_tail([])) |> toEqual([]));
  test("one", () => expect(evens_tail([1])) |> toEqual([]));
  test("even", () => expect(evens_tail([1,2])) |> toEqual([2]));
});

describe("count_true", () => {
  test("basic", () => expect(count_true([true, false, true])) |> toEqual(2));
  test("empty", () => expect(count_true([])) |> toEqual(0));
  test("one false", () => expect(count_true([false])) |> toEqual(0));
  test("one true", () => expect(count_true([true])) |> toEqual(1));
});