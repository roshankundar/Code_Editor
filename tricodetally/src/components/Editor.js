import React, { useEffect } from 'react';
import codemirror from 'codemirror';
import {basicSetup, EditorView} from "codemirror"
// import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from '@codemirror/autocomplete';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';

const Editor = () => {
 
  new EditorView({
    doc: "console.log('hello')\n",
    extensions: [basicSetup, javascript()],
    parent: document.body
  })
  return <div id="realtimeEditor" style={{ height: '100%' }}></div>;
};

export default Editor;

