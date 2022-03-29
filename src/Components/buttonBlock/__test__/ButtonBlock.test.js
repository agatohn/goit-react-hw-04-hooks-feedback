import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonBlock from "../ButtonBlock";

describe("ButtonBlock", () => {
  let mockedAddFeedback;
  let mockedOptions;
  let buttonGood;
  let buttonNeutral;
  let buttonBad;

  beforeEach(() => {
    mockedAddFeedback = jest.fn();
    mockedOptions = ["good", "neutral", "bad"];
    render(
      <ButtonBlock addFeedback={mockedAddFeedback} options={mockedOptions} />
    );
    buttonGood = screen.getByRole("button", {
      name: /good/i,
      class: /button/i,
    });
    buttonNeutral = screen.getByRole("button", {
      name: /neutral/i,
      class: /button/i,
    });
    buttonBad = screen.getByRole("button", {
      name: /bad/i,
      class: /button/i,
    });
  });

  it("should render three buttons", () => {
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("should call mockedAddFeedback on button click", () => {
    fireEvent.click(buttonGood);
    expect(mockedAddFeedback).toBeCalledWith("good");
  });
});
