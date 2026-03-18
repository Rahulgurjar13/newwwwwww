"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Rahul Khanna",         city: "Delhi",       initials: "RK", text: "We booked a Mathura Vrindavan tour package for our family and the experience was very smooth. The pickup was on time, temple visits were well planned, and we never felt rushed. Everything felt organised from start to finish." },
  { name: "Lakshmi Narayanan",    city: "Bengaluru",   initials: "LN", text: "Travelling from South India, we were worried about managing temple queues and local transport. The team handled everything properly and guided us on darshan timing. The journey felt comfortable and peaceful." },
  { name: "Pooja Verma",          city: "Lucknow",     initials: "PV", text: "The itinerary was practical and not overloaded. We could visit the temples calmly and still have enough rest during the day. For families travelling with elders, the planning made a big difference." },
  { name: "Amitabh Sengupta",     city: "Kolkata",     initials: "AS", text: "Our driver knew the local routes very well, which helped us avoid unnecessary traffic and delays. Temple darshan was arranged during manageable hours. Overall, the trip felt smooth and well coordinated." },
  { name: "Karthik Subramanian",  city: "Chennai",     initials: "KS", text: "This was my first visit to Braj, and I was unsure how to cover all the important places. The itinerary helped us visit Mathura, Vrindavan, and nearby temples in a comfortable way without confusion." },
  { name: "Neha Arora",           city: "Chandigarh",  initials: "NA", text: "The best part of the tour was the timing of the temple visits. We reached major temples early and avoided heavy queues. That small planning detail made the experience much more peaceful." },
  { name: "Harsh Vardhan Singh",  city: "Patna",       initials: "HV", text: "I travelled with my parents, so comfort was important. The schedule was balanced and we never felt physically exhausted. The driver was patient and helpful throughout the journey." },
  { name: "Meenakshi Iyer",       city: "Coimbatore",  initials: "MI", text: "The tour felt structured but not rushed. We had enough time at each temple to experience the atmosphere. The evening visit to Prem Mandir was especially memorable." },
  { name: "Ritesh Jain",          city: "Indore",      initials: "RJ", text: "Everything from hotel coordination to temple visits was handled smoothly. Instead of worrying about logistics, we could simply focus on the spiritual experience." },
  { name: "Ananya Banerjee",      city: "Durgapur",    initials: "AB", text: "I appreciated how calmly the entire trip was managed. Even during crowded temple hours, the guidance helped us move smoothly. It made our first Braj trip very comfortable." },
  { name: "Sandeep Rao",          city: "Hyderabad",   initials: "SR", text: "Covering multiple temples in one trip can easily become chaotic, but the planning kept the journey organised. Travel routes and darshan timing were handled thoughtfully." },
  { name: "Kavya Sharma",         city: "Jaipur",      initials: "KS", text: "The overall experience felt personal rather than commercial. The team understood what travellers actually need during a pilgrimage trip. It made our Mathura Vrindavan visit peaceful and memorable." },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-semibold shadow-md select-none">
      {initials}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-[3px] mb-2">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f97316">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[300px] flex-shrink-0 bg-white rounded-xl p-5 border border-orange-200 shadow-sm relative overflow-hidden">

      <span className="absolute top-3 right-4 text-[52px] text-orange-500/10 font-bold">
        "
      </span>

      <StarRow />

      <p className="text-sm text-neutral-700 leading-relaxed mb-4">
        {t.text}
      </p>

      <div className="flex items-center gap-3">
        <Avatar initials={t.initials} />
        <div>
          <div className="text-xs font-medium text-orange-700 tracking-wide">
            {t.name}
          </div>
          <div className="text-xs text-orange-400 italic">
            {t.city}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse=false }: { items: typeof testimonials, reverse?: boolean }) {

  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">

      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-orange-50 to-transparent z-10"/>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-50 to-transparent z-10"/>

      <div
        className={`flex gap-5 w-max animate-[marquee_40s_linear_infinite] ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {doubled.map((t,i)=>(<Card key={i} t={t}/>))}
      </div>

    </div>
  );
}

export default function TestimonialsSection() {

  const ref = useRef<HTMLElement>(null);
  const [visible,setVisible] = useState(false);

  useEffect(()=>{
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting) setVisible(true);
    },{threshold:0.1});

    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);

  return (
    <section
      ref={ref}
      className="relative bg-orange-0 py-20 overflow-hidden"
    >

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none"/>

      {/* Header */}
      <div className="text-center mb-12 px-5">

        <div className={`flex items-center justify-center gap-2 mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="w-7 h-[1px] bg-orange-400"/>
          <span className="text-xs tracking-[0.18em] uppercase text-orange-500">
            Pilgrim Experiences
          </span>
          <div className="w-7 h-[1px] bg-orange-400"/>
        </div>

        <h2 className={`text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-orange-700 tracking-wider transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          What Our Devotees Say
        </h2>

        <p className={`italic text-neutral-500 mt-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          श्री कृष्ण की कृपा से हर यात्रा यादगार बनती है
        </p>

        <div className="flex justify-center items-center gap-2 mt-4">
          <div className={`h-[2px] bg-gradient-to-r from-transparent to-orange-500 transition-all duration-1000 ${visible ? "w-12" : "w-0"}`}/>
          <div className="w-[7px] h-[7px] bg-orange-500 rotate-45"/>
          <div className={`h-[2px] bg-gradient-to-r from-orange-500 to-transparent transition-all duration-1000 ${visible ? "w-12" : "w-0"}`}/>
        </div>

      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={row1}/>
        <MarqueeRow items={row2} reverse/>
      </div>

      {/* Bottom stats */}
      <div className="flex justify-center flex-wrap gap-8 mt-12 px-5">

        {[
          {num:"1200+", label:"Happy Pilgrims"},
          {num:"4.9★", label:"Average Rating"},
          {num:"100%", label:"Organised Trips"}
        ].map((s,i)=>(
          <div key={i} className="text-center">
            <div className="text-xl font-semibold text-orange-500">{s.num}</div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              {s.label}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}