import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditorComponent() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div>
      <Editor
        apiKey="vf5l2u2mzm7bumggnbi7qgzjyobu7ekqqv0tgw9lh7peho9r"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Enter and edit job description here...</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px:  }",
        }}

      />
      {/* <button onClick={log}>Log editor content</button> */}
    </div>
  );
}
