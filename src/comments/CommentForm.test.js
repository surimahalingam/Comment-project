import React from 'react';
import { act } from "react-dom/test-utils";
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import CommentForm from './CommentForm';

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

describe('CommentForm', () => {

      /**
      * Identify the data for CommentForm
      */
      it("Identify the data for CommentForm", () => {
            act(() => {
                  render(
                        <CommentForm />, container);
            });

            const textarea = document.querySelector("[className=comment-form-textarea]");
            expect(textarea).not.toBeNull;
      });


      /**
      * Identify the data for Comment Button
      */
      it("Identify the data for Comment Button", () => {
            act(() => {
                  render(
                        <CommentForm />, container);
            });

            const commentBotton = document.querySelector("[className=comment-form-button]");
            expect(commentBotton).not.toBeNull;
      });
})
