import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import EditorToolbar, { modules, formats } from './Toolbar';

export function Quill() {
  const [value, setValue] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md max-w-[36rem] max-h-[300px] overflow-auto">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Escreva aqui..."
        modules={modules}
        formats={formats}
        className="h-[200px] w-[36rem]" // Define a altura do editor com Tailwind
      />
    </div>
  );
}