import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Comments from './Comments';


let container = null;
beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
});

afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
});

describe('Comments', () => {

      /**
      * Identify the data for comments-title
      */
      it("Identify the data for comments-title", () => {
            act(() => {
                  render(
                        <Comments />, container);
            });

            const commentsTitle = document.querySelector("[className=comments-title]");
            expect(commentsTitle).not.toBeNull;
      });


      /**
      * Identify the data for comments-container
      */
      it("Identify the data for comments-container", () => {
            act(() => {
                  render(
                        <Comments />, container);
            });

            const commentsContainer = document.querySelector("[className=comments-container]");
            expect(commentsContainer).not.toBeNull;
      });
})
