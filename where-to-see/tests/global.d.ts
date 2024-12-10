import { expect as chaiExpect } from 'chai';
import React from "react";

declare global {
  interface Global {
    expect: typeof chaiExpect;
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any; // Esto permite que JSX acepte cualquier elemento.
    }
  }
}
