import { useEffect, useRef, useState } from "react";

const usePhoneInputMutation = () => {
  useEffect(() => {
    const makeChanges = () => {
      const inputFlagToChange = document.querySelector(".il") as HTMLElement;
      const dropdownFlagToChange = document.querySelector(
        '[data-country-code="il"] .il'
      ) as HTMLElement;
      const countryNameToChange = document.querySelector(
        '[data-country-code="il"] .country-name'
      ) as HTMLElement;
      if (inputFlagToChange) {
        inputFlagToChange.classList.add("ps");
        const elementToChangeItsTitle = inputFlagToChange.parentElement;
        if (elementToChangeItsTitle?.hasAttribute("title")) {
          elementToChangeItsTitle.setAttribute("title", "Palestine: + 972");
        }
      }
      if (dropdownFlagToChange) {
        dropdownFlagToChange.classList.add("ps");
      }
      if (countryNameToChange) {
        countryNameToChange.innerText = "Palestine";
      }
    };
    const mutationObserver = new MutationObserver((mutationsList, observer) => {
      const flagsList = mutationsList[0];

      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const addedNodes = Array.from(mutation.addedNodes);

          for (let addedNode of addedNodes) {
            const searchObserver = new MutationObserver((mutationsList) => {
              if (mutationsList[0]) {
                makeChanges();
              }
            });
            const dynamicElement = addedNode as HTMLElement;
            const searchBox = dynamicElement.querySelector(".search-box");
            searchBox &&
              searchObserver.observe(searchBox, { attributes: true });
          }
        }
      }
      if (flagsList) {
        makeChanges();
      }
    });

    const flagDropdown = document.getElementsByClassName("flag-dropdown")[0];

    mutationObserver.observe(flagDropdown, {
      childList: true,
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);
};

export default usePhoneInputMutation;
