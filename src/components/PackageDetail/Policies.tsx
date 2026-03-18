"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, FileText, Wallet } from "lucide-react";
import { RotateCcw, Ban, BadgeCheck, CreditCard } from "lucide-react";


const getIcon = {
    "Refund Policy" : <RotateCcw className="w-6 h-6 text-orange-400" />,
    "Cancellation Policy" : <Ban className="w-6 h-6 text-orange-400"/>,
    "Confirmation Policy" : <BadgeCheck className="w-6 h-6 text-orange-400" />,
    "Payment Policy" : <CreditCard className="w-6 h-6 text-orange-400"/>
}


// {
//     "id": "67cb2026-af18-41ce-8d94-dd8b879aa386",
//     "title": "Refund Policy",
//     "description": "100% refund if cancelled 48 hours before trip starting time."
//   },
//   {
//     "id": "9a186572-e56c-447d-87c8-78246c47c7ca",
//     "title": "Cancel Policy",
//     "description": "To cancel your trip, simply text or call at our official booking contact or mail us at info@vrindavanmathuraguide.com"
//   },
//   {
//     "id": "e677d7ff-5f87-4996-ac1d-1374a702ac23",
//     "title": "Confirmation  Policy",
//     "description": "You will have to pay an advance to confirm your trip, make payment at the verified channels only."
//   },
//   {
//     "id": "dddad492-0b89-4eee-8004-606735b19296",
//     "title": "Payment Ploicy",
//     "description": "50% to be paid as advance and remaining at the start of the tour."
//   }
// ]




export default function Policies({PackageData} : any) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-6 sm:0">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Policies & Important Information
      </h2>

      <div className="space-y-4 cursor-pointer">
        {PackageData.policies.map((item : any, index : any) => {
          const isOpen = active === index;
        

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer
              ${
                isOpen
                  ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-200"
                  : "border-gray-200 bg-white hover:border-orange-300"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setActive(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all
                    `}
                  >
                      {getIcon[item.title as keyof typeof getIcon]}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ChevronDown
                  className={`h-6 w-6 text-orange-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  <p>{item.description}</p>

                  {/* Accent Divider */}
                  <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
