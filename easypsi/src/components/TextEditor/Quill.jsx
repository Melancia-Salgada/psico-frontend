import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import EditorToolbar, { modules, formats } from './Toolbar';
import { TemaContexto } from '../WhiteMode';

export function Quill() {
  const [value, setValue] = useState('');

  const { tema } = useContext(TemaContexto);
  const bg = tema ? 'bg-white' : 'bg-neutral-900 text-branco-whitemode';

  return (
    <div className="rounded-lg shadow-md overflow-auto border">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Escreva aqui..."
        modules={modules}
        formats={formats}
        className="h-[200px] " // Define a altura do editor com Tailwind
      />
    </div>
  );
}
