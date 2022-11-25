import React from "react";
import Simpsons from "../Simpsons";

import {render, fireEvent, screen} from "../../../utils/test-utils";

it("Renders the connected app with initialState", () => {
  const comp = render(<Simpsons />, {
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
  const list = comp.getByTestId("list-simpsons");
  expect(list.props.data.length).toBe(1);
  screen.debug();
});
