'use client';

import {
  useEditor,
  EditorContent,
  EditorProvider,
  useCurrentEditor,
  Editor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { cn } from '@/lib/utils';
import {
  Bold,
  Code,
  Eraser,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  MessageSquareQuote,
  Redo2,
  RemoveFormatting,
  SquareCode,
  Strikethrough,
  Undo2,
  WrapText,
} from 'lucide-react';
import { MouseEventHandler, ReactNode } from 'react';
import { VscHorizontalRule } from 'react-icons/vsc';

const ButtonToggle = ({
  onClick,
  disabled,
  isActive,
  children,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  isActive?: boolean;
  children?: ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'group relative flex h-8 min-w-8 items-center justify-center rounded-md border border-input',
        isActive ? 'bg-lime-400' : '',
        disabled && 'opacity-40',
      )}
    >
      <div className="absolute -inset-0.5 -z-0 rounded-md bg-lime-400/10 opacity-0 backdrop-blur-md group-hover:opacity-100"></div>
      {children}
    </button>
  );
};

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="flex flex-row flex-wrap gap-2">
        <ButtonToggle
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        >
          <Bold className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        >
          <Italic className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
        >
          <Strikethrough className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
        >
          <div className="z-10 flex items-center gap-1 px-2">
            <Code className="h-4 w-4" /> Code
          </div>
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <RemoveFormatting className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle onClick={() => editor.chain().focus().clearNodes().run()}>
          <div className="z-10 flex items-center gap-1 px-2">
            <Eraser className="h-4 w-4" /> Node
          </div>
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive('paragraph')}
        >
          P
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive('heading', { level: 1 })}
        >
          <Heading1 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
        >
          <Heading2 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive('heading', { level: 3 })}
        >
          <Heading3 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          isActive={editor.isActive('heading', { level: 4 })}
        >
          <Heading4 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          isActive={editor.isActive('heading', { level: 5 })}
        >
          <Heading5 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          isActive={editor.isActive('heading', { level: 6 })}
        >
          <Heading6 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        >
          <List className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        >
          <ListOrdered className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
        >
          <SquareCode className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
        >
          <MessageSquareQuote className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <VscHorizontalRule className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <WrapText className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo2 className="z-10 h-4 w-4" />
        </ButtonToggle>

        <ButtonToggle
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo2 className="z-10 h-4 w-4" />
        </ButtonToggle>
        {/* 
        <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={
            editor.isActive('textStyle', { color: '#958DF1' })
              ? 'is-active'
              : ''
          }
        >
          Purple
        </button> */}
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const Tiptap = () => {
  const editor = useEditor({
    content: '',
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      // onValueChange && onValueChange(json)
      // send the content to an API here
    },
    extensions,

    editorProps: {
      attributes: {
        class:
          'w-full h-fit p-3 max-w-none overflow-y-auto rounded-md border border-input prose',
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <MenuBar editor={editor} />
      <EditorContent
        className="h-fit max-h-full w-full overflow-y-auto"
        editor={editor}
      ></EditorContent>
    </div>
  );
};

export default Tiptap;
