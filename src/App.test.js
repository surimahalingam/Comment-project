import React from 'react';
import { act } from "react-dom/test-utils";
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';

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

describe('App Component', () => {
  /**
  * Identify the data for Header Content
  */
  it("Identify the data for Header Content", () => {
    act(() => {
      render(<App />, container);
    });

    const headerContent = document.querySelector("[className=headerContent]");
    expect(headerContent).not.toBeNull;
  });


  /**
  * Identify the data for Side Content
  */
  it("Identify the data for Side Content", () => {
    act(() => {
      render(<App />, container);
    });

    const sideContent = document.querySelector("[className=sideContent]");
    expect(sideContent).not.toBeNull;
  });


  /**
  * Identify the data for Image
  */
  it("Identify the data for Image", () => {
    act(() => {
      render(<App />, container);
    });

    const image = document.querySelector("[className=post-img]");
    expect(image).not.toBeNull;
  });


  /**
  * Identify the data for Reply Button
  */
  it("Identify the data for Reply Button", () => {
    act(() => {
      render(<App />, container);
    });

    const replyButton = document.querySelector("[className=reply-btn]");
    expect(replyButton).not.toBeNull;
  });

})