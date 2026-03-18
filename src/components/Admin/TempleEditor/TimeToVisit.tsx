import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

type Props = {
  visits: string;
  onChange: any;
  editorType: "Blog" | "Package" | "Temple";
};

const BestTimeHandler = ({ visits, onChange, editorType }: Props) => {
  return (
    <div className="border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg transition">

      <div className="w-full text-3xl font-bold text-white text-center mb-5">
        Best Time to Visit
      </div>

      <div className="border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 mb-5">

        <SunEditor
          setContents={visits}
          setOptions={{
            minHeight: "200px",
            maxHeight: "300px",
            buttonList: [
              ["undo", "redo"],
              ["formatBlock"],
              ["bold", "italic", "underline"],
              ["list"],
              ["align"],
              ["link", "image"],
              ["table"],
            ],
          }}
          onChange={(value) => onChange('visits',value)}
        />

      </div>

    </div>
  );
};

export default BestTimeHandler;