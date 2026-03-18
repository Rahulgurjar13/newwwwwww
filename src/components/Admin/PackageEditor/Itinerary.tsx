import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

type Itinerary = {
  id: string;
  day: number;
  title: string;
  description: string;
};

const ItinearyMaker = ({
  itinerary,
  setItinerary,
}: {
  itinerary: Itinerary[];
  setItinerary: React.Dispatch<React.SetStateAction<Itinerary[]>>;
  editorType: "Blog" | "Package";
}) => {
  const handleAddFaq = () => {
    setItinerary((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), day: 0, title: "", description: "" },
      ];
    });
  };

  const handleDeleteItineary = (ItinerayId: string) => {
    setItinerary((prev) => {
      return prev.filter((Itenary) => Itenary.id != ItinerayId);
    });
  };

  const handleDurationChange = (ItenaryId: string, value: string) => {
    setItinerary((prev) => {
      return prev.map((Itenary) => {
        return Itenary.id == ItenaryId
          ? {
              ...Itenary,
              day: value === "" ? 0 : Number(value),
            }
          : Itenary;
      });
    });
  };

  const handleTitleChange = (ItenaryId: string, value: string) => {
    setItinerary((prev) => {
      return prev.map((Itenary) => {
        return Itenary.id == ItenaryId
          ? {
              ...Itenary,
              title: value,
            }
          : Itenary;
      });
    });
  };

  const handleDescriptionChange = (ItenaryId: string, value: string) => {
    setItinerary((prev) => {
      return prev.map((Itenary) => {
        return Itenary.id == ItenaryId
          ? {
              ...Itenary,
              description: value,
            }
          : Itenary;
      });
    });
  };

  return (
    <div className="border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition">
      <div className="w-full text-3xl text-extrabold text-white text-center mb-5">
        Itenary Maker
      </div>
      {itinerary.map((item: Itinerary) => (
        <div
          key={item.id}
          className="border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5"
        >
          <div className="flex gap-3">
            <div>
               <label className="text-gray-400 font-semibold">
                 Day
              </label>

               <input
                required
                type="number"
                placeholder="Enter Day Of The Itineray"
                className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                value={item.day}
                onChange={(e) => {
                  handleDurationChange(item.id, e.target.value);
                }}
            />

            </div>

            <div>
               <label className="text-gray-400 font-semibold">
                 Title
              </label>

              <input
              required
              type="text"
              placeholder="Enter The Title Of The Itineary Day"
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
              value={item.title}
              onChange={(e) => {
                handleTitleChange(item.id, e.target.value);
              }}
            />
              
            </div>
           

            
          </div>

     <div className="dark-sun-editor h-[45vh] w-full rounded-2xl p-5  my-7 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-400 border border-indigo-400 shadow-indigo-400 hover:border-2 hover:border-indigo-400 transition cursor-pointer">
           <label className="text-gray-400 font-semibold py-6">
                 Description
          </label>
          <div className="bg-white rounded-2xl border border-sky-100 shadow-sm">
            <SunEditor
              defaultValue={item.description}
              setOptions={{
                minHeight: "35vh",
                maxHeight: "40vh",
                buttonList: [
                  ["undo", "redo"],
                  ["formatBlock"],
                  ["bold", "italic", "underline"],
                  ["list", "outdent", "indent"],
                  ["align"],
                  ["link", "image"],
                  ["table"],
                ],
              }}
              onChange={(content) => {
                handleDescriptionChange(item.id, content);
              }}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              className="px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition"
              onClick={() => handleDeleteItineary(item.id)}
            >
              Delete Button
            </button>
          </div>
        </div>
      ))}

      <div className="mt-10 w-full flex justify-center">
        <button
          type="button"
          onClick={handleAddFaq}
          className="px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition"
        >
          Add Itineary
        </button>
      </div>
    </div>
  );
};

export default ItinearyMaker;
