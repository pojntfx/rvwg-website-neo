import * as React from "react";
import { navigate } from "gatsby";
import Konami from "react-konami-code";

interface IEasterEggTrigger {
  yDelta: number;
}

const navigateToEasterEggs = () =>
  typeof window !== "undefined" &&
  navigate("/eastereggs", {
    state: {
      easterEggIsVisible: true
    }
  });

const EasterEggTouchTrigger = (props: IEasterEggTrigger) => {
  if (
    typeof window !== "undefined" &&
    window.innerHeight < -props.yDelta + 100
  ) {
    // User has swiped from top to bottom
    {
      navigateToEasterEggs();
      return null;
    }
  } else {
    return null;
  }
};

const EasterEggTrigger = (props: IEasterEggTrigger) => (
  <>
    <EasterEggTouchTrigger {...props} />
    <Konami action={navigateToEasterEggs} />
  </>
);

export { EasterEggTrigger };
