import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/dom';
import { render, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Comment from './CommentForm';


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

describe('Comment', () => {

      /**
      * Identify the data for comment-image-container
      */
      it("Identify the data for comment-image-container", () => {
            act(() => {
                  render(
                        <Comment />, container);
            });

            const imageContainer = document.querySelector("[className=comment-image-container]");
            expect(imageContainer).not.toBeNull;

            // expect(imageContainer.length).toBe(1);
      });


      /**
      * Identify the data for comment-actions
      */
       it("Identify the data for comment-actions", () => {
            act(() => {
                  render(
                        <Comment />, container);
            });

            const actions = document.querySelector("[className=comment-actions]");
            expect(actions).not.toBeNull;
            // let actions = screen.getAllByTestId('comment-actions');
            // expect(actions.length).toBe(1);
      });


        /**
      * Identify the data for comment-text
      */
         it("Identify the data for comment-text", () => {
            act(() => {
                  render(
                        <Comment />, container);
            });

            const text = document.querySelector("[className=comment-text]");
            expect(text).not.toBeNull;
            // expect(text.length).toBe(1);
      });
      
})
