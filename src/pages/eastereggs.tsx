import * as React from "react";
import { EasterEgg } from "../components/EasterEgg";
import DefaultLayout from "../layouts/Default";
import { Head } from "../components/Head";
import { navigate } from "gatsby";

const EasterEggs = ({ location }) => (
  <DefaultLayout location={location}>
    <Head title="Easter Eggs" />
    {/* Double protection: Only show modal if location is given and if it is not, navigate back to home - 
    this is necessary to prevent the background from appearing first! */}
    {location.state ? (
      location.state.easterEggIsVisible ? (
        <EasterEgg
          easterEggIsVisible={
            location.state
              ? location.state.easterEggIsVisible
              : typeof window !== "undefined" && navigate("/")
          }
        />
      ) : (
        typeof window !== "undefined" && navigate("/")
      )
    ) : (
      typeof window !== "undefined" && navigate("/")
    )}
  </DefaultLayout>
);

export default EasterEggs;
