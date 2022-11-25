import React from "react";
import Create from "../Create";
import Simpsons from "../../Simpsons/Simpsons";
import {render, fireEvent, screen} from "../../../utils/test-utils";
import configureStore from "redux-mock-store";

describe("Renders the connected app with initialState", () => {
  let compCreate;
  let compSimpsons;
  let store;
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore({
      name: "Homer Simpson",
      avatar:
        "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437",
      job: "Nuclear Safety Inspector",
      description:
        "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
      id: "14",
    });
    console.log("store", store);
    const navigate = jest.fn();
    compCreate = render(<Create navigation={{navigate}} />, {
      preloadedState: {
        simpson: {
          simpsons: [
            {
              name: "Homer Simpson",
              avatar:
                "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437",
              job: "Nuclear Safety Inspector",
              description:
                "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
              id: "14",
            },
          ],
          status: "idle",
          lastId: 0,
        },
      },
    });
    compSimpsons = render(<Simpsons />, {
      preloadedState: {
        simpson: {
          simpsons: [
            {
              name: "Homer Simpson",
              avatar:
                "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437",
              job: "Nuclear Safety Inspector",
              description:
                "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
              id: "14",
            },
          ],
          status: "idle",
          lastId: 0,
        },
      },
    });
  });
  it("should create simpson", () => {
    const fullname = "Mr. Burns";
    const job = "owner of springfield nuclear power plant";
    const description =
      "Burns, is a recurring character and antagonist in the animated television series The Simpsons, voiced initially by Christopher Collins, and currently by Harry Shearer. He is the evil, devious, greedy, and wealthy owner of the Springfield Nuclear Power Plant and, by extension, Homer Simpson's boss.";
    const avatar =
      "https://static.wikia.nocookie.net/villains/images/3/35/Buns.png/revision/latest?cb=20211207054709";
    const createButton = compCreate.getByTestId("create-simpson");
    const fullnameInput = compCreate.getByTestId("fullname");
    const jobInput = compCreate.getByTestId("job");
    const descriptionInput = compCreate.getByTestId("description");
    const avatarInput = compCreate.getByTestId("avatar");

    fireEvent.changeText(fullnameInput, fullname);
    fireEvent.changeText(jobInput, job);
    fireEvent.changeText(descriptionInput, description);
    fireEvent.changeText(avatarInput, avatar);
    fireEvent.press(createButton);

    const simpsonsLengthFirst =
      compSimpsons.getByTestId("list-simpsons").props.data.length;
    expect(simpsonsLengthFirst).toBe(1);
  });
});
