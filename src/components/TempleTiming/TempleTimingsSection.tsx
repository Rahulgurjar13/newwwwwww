"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, Sun, Moon, MapPin, ChevronDown, ChevronUp } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
export type TimingRow = {
  label: string;  
  time: string;    
};

export type SeasonBlock = {
  season: "Summer" | "Winter" | "All Year" | string;
  morning: TimingRow[];
  evening: TimingRow[];
};

export type TempleTimingData = {
  id: number;
  name: string;        // "Shri Krishna Janmasthan Mandir"
  location: string;    // "Mathura"
  slug: string;
  timings: SeasonBlock[];
};

// ── Sample Data (replace / extend with your real data or Supabase fetch) ──
export const TEMPLE_TIMINGS: TempleTimingData[] = [
  {
  id: 1,
  name: "Shri Krishna Janmasthan Mandir",
  location: "Mathura",
  slug: "krishna-janmasthan",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Darshan", time: "05:00 AM – 12:00 PM" },
        { label: "Mangla Aarti", time: "05:30 AM" },
        { label: "Makhan Bhog", time: "08:00 AM" }
      ],
      evening: [
        { label: "Darshan", time: "04:00 PM – 09:30 PM" },
        { label: "Sandhya", time: "06:00 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Darshan", time: "05:30 AM – 12:00 PM" },
        { label: "Mangla Aarti", time: "05:30 AM" },
        { label: "Makhan Bhog", time: "08:00 AM" }
      ],
      evening: [
        { label: "Darshan", time: "03:00 PM – 08:30 PM" },
        { label: "Sandhya", time: "06:00 PM" }
      ]
    }
  ]
},

{
  id: 2,
  name: "Shri Banke Bihari Ji Temple",
  location: "Vrindavan",
  slug: "banke-bihari-temple",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Opening", time: "07:00 AM" },
        { label: "Shringar", time: "08:00 AM" },
        { label: "Rajbhog", time: "11:00 AM – 11:30 AM" },
        { label: "Rajbhog Aarti & Closing", time: "12:00 PM" }
      ],
      evening: [
        { label: "Opening", time: "04:15 PM" },
        { label: "Shayan Bhog", time: "08:30 PM – 09:00 PM" },
        { label: "Shayan Aarti & Closing", time: "09:45 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Opening", time: "08:00 AM" },
        { label: "Shringar", time: "09:00 AM" },
        { label: "Rajbhog", time: "12:00 PM – 12:30 PM" },
        { label: "Rajbhog Aarti & Closing", time: "01:45 PM" }
      ],
      evening: [
        { label: "Opening", time: "04:00 PM" },
        { label: "Shayan Bhog", time: "07:30 PM – 08:00 PM" },
        { label: "Shayan Aarti & Closing", time: "09:15 PM" }
      ]
    }
  ]
},

{
  id: 3,
  name: "Shri Dwarkadheesh Mandir",
  location: "Mathura",
  slug: "dwarkadheesh-mandir",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Mangla", time: "06:30 AM – 07:00 AM" },
        { label: "Shringar", time: "07:40 AM – 07:55 AM" },
        { label: "Gwal", time: "08:25 AM – 08:45 AM" },
        { label: "Rajbhog", time: "10:00 AM – 10:30 AM" }
      ],
      evening: [
        { label: "Utthapan", time: "04:00 PM – 04:20 PM" },
        { label: "Bhog", time: "04:45 PM – 05:05 PM" },
        { label: "Aarti", time: "05:20 PM – 05:40 PM" },
        { label: "Sayan", time: "06:30 PM – 07:00 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Mangla", time: "06:30 AM – 07:00 AM" },
        { label: "Shringar", time: "07:40 AM – 07:55 AM" },
        { label: "Gwal", time: "08:25 AM – 08:45 AM" },
        { label: "Rajbhog", time: "10:00 AM – 10:30 AM" }
      ],
      evening: [
        { label: "Utthapan", time: "03:30 PM – 03:50 PM" },
        { label: "Bhog", time: "04:45 PM – 05:05 PM" },
        { label: "Aarti", time: "06:00 PM" }
      ]
    }
  ]
},

{
  id: 4,
  name: "Vishram Ghat",
  location: "Mathura",
  slug: "vishram-ghat",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Aarti", time: "07:00 AM – 07:15 AM" }
      ],
      evening: [
        { label: "Aarti", time: "06:45 PM – 07:00 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Aarti", time: "06:45 AM – 07:00 AM" }
      ],
      evening: [
        { label: "Aarti", time: "06:45 PM – 07:00 PM" }
      ]
    }
  ]
},

{
  id: 5,
  name: "Shri Birla Mandir",
  location: "Mathura",
  slug: "birla-mandir",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Darshan", time: "05:00 AM – 12:00 PM" }
      ],
      evening: [
        { label: "Darshan", time: "02:00 PM – 09:00 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Darshan", time: "05:30 AM – 12:00 PM" }
      ],
      evening: [
        { label: "Darshan", time: "02:00 PM – 08:30 PM" }
      ]
    }
  ]
},

{
  id: 6,
  name: "Shri Rang Ji Mandir",
  location: "Vrindavan",
  slug: "rang-ji-mandir",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Opening", time: "05:30 AM – 10:30 AM" },
        { label: "Aarti", time: "05:30 AM – 06:00 AM" }
      ],
      evening: [
        { label: "Opening", time: "04:00 PM – 09:00 PM" },
        { label: "Aarti", time: "06:30 PM – 07:00 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Opening", time: "06:00 AM – 11:00 AM" },
        { label: "Aarti", time: "06:00 AM – 06:30 AM" }
      ],
      evening: [
        { label: "Opening", time: "04:00 PM – 09:00 PM" },
        { label: "Aarti", time: "06:30 PM – 07:00 PM" }
      ]
    }
  ]
},

{
  id: 7,
  name: "ISKCON Temple (Shri Krishna Balram Mandir)",
  location: "Vrindavan",
  slug: "iskcon-krishna-balram-temple",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Mangla Aarti", time: "05:00 AM" },
        { label: "Tulsi Aarti", time: "05:30 AM" },
        { label: "Guru Puja", time: "07:15 AM" },
        { label: "Pravachan", time: "07:30 AM" },
        { label: "Shringar Aarti", time: "08:30 AM" },
        { label: "Rajbhog Aarti", time: "12:00 PM" }
      ],
      evening: [
        { label: "Dhoop Aarti", time: "04:30 PM" },
        { label: "Sandhya Aarti", time: "06:30 PM" },
        { label: "Geeta Pravachan", time: "07:30 PM" },
        { label: "Sayan Aarti", time: "08:00 PM" }
      ]
    }
  ]
},

{
  id: 8,
  name: "Prem Mandir",
  location: "Vrindavan",
  slug: "prem-mandir",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Parikrama Aarti", time: "05:00 AM" },
        { label: "Bhog", time: "06:30 AM" },
        { label: "Aarti Darshan", time: "08:30 AM" },
        { label: "Bhog", time: "11:30 AM" }
      ],
      evening: [
        { label: "Darshan", time: "04:30 PM" },
        { label: "Bhog", time: "05:30 PM" },
        { label: "Parikrama", time: "07:00 PM" },
        { label: "Sayan Aarti", time: "08:10 PM" },
        { label: "Temple Closing", time: "08:30 PM" }
      ]
    }
  ]
},

{
  id: 9,
  name: "Vaishno Devi Temple",
  location: "Vrindavan",
  slug: "vaishno-devi-temple-vrindavan",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Darshan", time: "06:20 AM – 08:00 AM" }
      ],
      evening: [
        { label: "Darshan", time: "07:20 PM – 08:30 PM" },
        { label: "Temple Closing", time: "08:30 PM" }
      ]
    }
  ]
},

{
  id: 10,
  name: "Radha Raman Mandir",
  location: "Vrindavan",
  slug: "radha-raman-mandir",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Mangla Aarti", time: "04:00 AM" },
        { label: "Darshan", time: "08:30 AM – 12:30 PM" }
      ],
      evening: [
        { label: "Darshan", time: "06:00 PM – 08:30 PM" }
      ]
    },
    {
      season: "Winter",
      morning: [
        { label: "Mangla Aarti", time: "05:30 AM" },
        { label: "Darshan", time: "08:30 AM – 12:30 PM" }
      ],
      evening: [
        { label: "Darshan", time: "06:00 PM – 08:30 PM" }
      ]
    }
  ]
},

{
  id: 11,
  name: "Shri Radha Vallabh Ji Mandir",
  location: "Vrindavan",
  slug: "radha-vallabh-mandir",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Darshan", time: "07:00 AM – 12:00 PM" }
      ],
      evening: [
        { label: "Darshan", time: "06:30 PM – 09:00 PM" }
      ]
    }
  ]
},

{
  id: 12,
  name: "Shri Katyayani Peeth",
  location: "Vrindavan",
  slug: "katyayani-peeth",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:00 AM – 11:00 AM" }],
      evening: [{ label: "Darshan", time: "05:30 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "05:30 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 13,
  name: "Shri Govind Dev Ji Mandir",
  location: "Vrindavan",
  slug: "govind-dev-ji-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "08:00 AM – 11:00 AM" }],
      evening: [{ label: "Darshan", time: "05:00 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "09:00 AM – 11:30 AM" }],
      evening: [{ label: "Darshan", time: "05:00 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 14,
  name: "Shri Nidhivan Ji Mandir",
  location: "Vrindavan",
  slug: "nidhivan-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "06:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "06:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 07:00 PM" }]
    }
  ]
},

{
  id: 15,
  name: "Shri Sevakunj Mandir",
  location: "Vrindavan",
  slug: "seva-kunj-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "06:30 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 06:30 PM" }]
    }
  ]
}

,
{
  id: 16,
  name: "Shri Shah Ji Mandir",
  location: "Vrindavan",
  slug: "shah-ji-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "09:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "06:00 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "09:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "06:00 PM – 09:00 PM" }]
    }
  ]
},

{
  id: 17,
  name: "Shri Radha Damodar Ji Mandir",
  location: "Vrindavan",
  slug: "radha-damodar-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "08:30 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "05:30 PM – 09:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "08:30 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "05:00 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 18,
  name: "Shri Priya Kant Ju Mandir",
  location: "Vrindavan",
  slug: "priya-kant-ju-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "05:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "05:00 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "06:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 19,
  name: "Shri Goda Vihar Mandir",
  location: "Vrindavan",
  slug: "goda-vihar-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "08:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "08:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 20,
  name: "Shri Tatiya Sthan Mandir",
  location: "Vrindavan",
  slug: "tatiya-sthan-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "08:30 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "05:30 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "08:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 21,
  name: "Shri Pagal Baba Mandir",
  location: "Vrindavan",
  slug: "pagal-baba-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "08:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "08:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 22,
  name: "Shri Jamuna Maiyya Arti",
  location: "Vrindavan",
  slug: "jamuna-maiyya-arti",
  timings: [
    {
      season: "Summer",
      morning: [],
      evening: [{ label: "Darshan", time: "05:00 PM – 07:00 PM" }]
    },
    {
      season: "Winter",
      morning: [],
      evening: [{ label: "Darshan", time: "04:00 PM – 06:00 PM" }]
    }
  ]
},

{
  id: 23,
  name: "Shri Gopeshwar Mahadev Mandir",
  location: "Vrindavan",
  slug: "gopeshwar-mahadev-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:30 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 24,
  name: "Shri Mukharvind Mandir",
  location: "Govardhan",
  slug: "mukharvind-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:30 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:30 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 25,
  name: "Dan Ghati Temple",
  location: "Govardhan",
  slug: "dan-ghati-temple",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Mangla Aarti", time: "04:00 AM" },
        { label: "Darshan", time: "06:00 AM – 09:00 PM" }
      ],
      evening: []
    },
    {
      season: "Winter",
      morning: [
        { label: "Aarti", time: "07:00 AM" },
        { label: "Darshan", time: "07:00 AM – 09:00 PM" }
      ],
      evening: []
    }
  ]
},

{
  id: 26,
  name: "Shri Nand Baba Mandir",
  location: "Nandgaon",
  slug: "nand-baba-mandir",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:00 AM – 01:00 PM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:00 AM – 01:00 PM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 09:00 PM" }]
    }
  ]
},

{
  id: 27,
  name: "Shri Shanidev Mandir",
  location: "Kokilavan",
  slug: "shanidev-mandir-kokilavan",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "05:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "05:00 AM – 12:30 PM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 28,
  name: "Shri Raman Reti Ashram",
  location: "Mahavan",
  slug: "raman-reti-ashram",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "04:00 AM – 11:00 AM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "04:00 AM – 11:00 AM" }],
      evening: [{ label: "Darshan", time: "04:30 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 29,
  name: "Shri Dau Ji Temple",
  location: "Baldeo",
  slug: "dau-ji-temple",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "06:00 AM – 11:00 AM" }],
      evening: [{ label: "Darshan", time: "04:00 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:00 AM – 12:00 PM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 30,
  name: "Shri Gokul Temple",
  location: "Gokul",
  slug: "gokul-temple",
  timings: [
    {
      season: "Summer",
      morning: [{ label: "Darshan", time: "07:30 AM – 10:30 AM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 08:30 PM" }]
    },
    {
      season: "Winter",
      morning: [{ label: "Darshan", time: "07:30 AM – 10:30 AM" }],
      evening: [{ label: "Darshan", time: "03:00 PM – 04:30 PM" }]
    }
  ]
},

{
  id: 31,
  name: "Nand Bhavan",
  location: "Gokul",
  slug: "nand-bhavan",
  timings: [
    {
      season: "Summer",
      morning: [
        { label: "Aarti", time: "05:00 AM" },
        { label: "Darshan", time: "05:00 AM – 12:00 PM" }
      ],
      evening: [{ label: "Darshan", time: "02:00 PM – 09:00 PM" }]
    },
    {
      season: "Winter",
      morning: [
        { label: "Mangla Aarti", time: "05:30 AM" },
        { label: "Darshan", time: "05:30 AM – 12:00 PM" }
      ],
      evening: [{ label: "Darshan", time: "06:00 PM – 08:30 PM" }]
    }
  ]
},

{
  id: 32,
  name: "Shri Ji Temple",
  location: "Barsana",
  slug: "shri-ji-temple-barsana",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Aarti", time: "05:00 AM" },
        { label: "Darshan", time: "05:00 AM – 02:00 PM" }
      ],
      evening: [{ label: "Darshan", time: "05:00 PM – 08:00 PM" }]
    }
  ]
},

{
  id: 33,
  name: "Kriti Mandir",
  location: "Barsana",
  slug: "kriti-mandir",
  timings: [
    {
      season: "All",
      morning: [
        { label: "Aarti", time: "05:00 AM" },
        { label: "Darshan", time: "05:00 AM – 02:00 PM" }
      ],
      evening: [{ label: "Darshan", time: "05:00 PM – 09:00 PM" }]
    }
  ]
}

];

// ── Season tab colours
const SEASON_STYLE: Record<string, { tab: string; active: string }> = {
  Summer:   { tab: "text-amber-600 border-amber-200 bg-amber-50",   active: "bg-amber-500 text-white border-amber-500" },
  Winter:   { tab: "text-sky-600 border-sky-200 bg-sky-50",          active: "bg-sky-500 text-white border-sky-500" },
  "All Year": { tab: "text-orange-600 border-orange-200 bg-orange-50", active: "bg-orange-500 text-white border-orange-500" },
};
const fallbackSeason = { tab: "text-orange-600 border-orange-200 bg-orange-50", active: "bg-orange-500 text-white border-orange-500" };

// ── useInView 
function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

// ── Single Temple Card 
function TempleTimingCard({ temple, idx }: { temple: TempleTimingData; idx: number }) {
  const [activeSeason, setActiveSeason] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(cardRef);

  const block = temple.timings[activeSeason];
  const style = SEASON_STYLE[block.season] ?? fallbackSeason;

  return (
    <div
      ref={cardRef}
      className={[
        "bg-white rounded-2xl border border-orange-100 overflow-hidden",
        "shadow-sm hover:shadow-[0_8px_32px_rgba(234,88,12,0.12)]",
        "transition-all duration-500",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      ].join(" ")}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      {/* ── Card header ── */}
      <div className="flex items-start justify-between gap-3 px-5 sm:px-6 pt-5 pb-4
        border-b border-orange-50"
      >
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-orange-600 leading-snug truncate">
            {temple.name}
          </h3>
          <span className="inline-flex items-center gap-1 text-xs text-stone-400 mt-1">
            <MapPin size={11} className="text-orange-300" />
            {temple.location}
          </span>
        </div>

        {/* Season tabs */}
        {temple.timings.length > 1 && (
          <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
            {temple.timings.map((t, i) => {
              const s = SEASON_STYLE[t.season] ?? fallbackSeason;
              return (
                <button
                  key={t.season}
                  onClick={() => setActiveSeason(i)}
                  className={[
                    "text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full border transition-all duration-200",
                    activeSeason === i ? s.active : s.tab,
                  ].join(" ")}
                >
                  {t.season}
                </button>
              );
            })}
          </div>
        )}

        {temple.timings.length === 1 && (
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${style.active}`}>
            {block.season}
          </span>
        )}
      </div>

      {/* ── Timing grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-orange-50">

        {/* Morning */}
        <div className="px-5 sm:px-6 py-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center">
              <Sun size={13} className="text-amber-500" />
            </div>
            <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">Morning</span>
          </div>
          <div className="flex flex-col gap-2">
            {block.morning.map((row, i) => (
              <div key={i} className="flex items-center justify-between gap-2
                bg-orange-50/60 rounded-xl px-3 py-2.5"
              >
                <span className="text-xs sm:text-[13px] text-stone-600 font-medium">{row.label}</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-orange-600 shrink-0">
                  <Clock size={10} className="text-orange-400" />
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Evening */}
        <div className="px-5 sm:px-6 py-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Moon size={13} className="text-indigo-400" />
            </div>
            <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">Evening</span>
          </div>
          <div className="flex flex-col gap-2">
            {block.evening.map((row, i) => (
              <div key={i} className="flex items-center justify-between gap-2
                bg-orange-50/60 rounded-xl px-3 py-2.5"
              >
                <span className="text-xs sm:text-[13px] text-stone-600 font-medium">{row.label}</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-orange-600 shrink-0">
                  <Clock size={10} className="text-orange-400" />
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Optional: "Note" footer slot — remove if not needed ── */}
      <div className="px-5 sm:px-6 pb-4 pt-1">
        <p className="text-[11px] text-stone-400 italic">
          * Timings may vary on festivals and special occasions. Verify locally before visiting.
        </p>
      </div>
    </div>
  );
}


export default function TempleTimingsSection({
  temples = TEMPLE_TIMINGS,
}: {
  temples?: TempleTimingData[];
}) {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");

  const locations = ["All", ...Array.from(new Set(temples.map(t => t.location)))];

  const filtered = temples.filter(t => {
    const matchLoc  = locationFilter === "All" || t.location === locationFilter;
    const matchName = t.name.toLowerCase().includes(search.toLowerCase());
    return matchLoc && matchName;
  });

  return (
    <section className="bg-white py-16 sm:py-20 px-4" id="temple-timings">
      <div className="max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-orange-400" />
            <span className="text-orange-500 text-xs font-semibold tracking-[.2em] uppercase">
              Darshan Timings
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-950 leading-tight">
              Temple Timings &{" "}
              <span className="text-orange-500">Aarti Schedule</span>
            </h2>
            <p className="text-stone-400 text-sm max-w-xs sm:text-right">
              Updated for 2026. Both summer &amp; winter schedules included.
            </p>
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-col  gap-3 mb-8">
          {/* Search */}
          <div className="relative w-full  sm:w-3xl">
            <Clock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-300" />
            <input
              type="text"
              placeholder="Search temple name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-orange-100
                bg-orange-50/50 text-sm text-orange-950 placeholder:text-stone-400
                focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
            />
          </div>
          {/* Location filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setLocationFilter(loc)}
                className={[
                  "px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200",
                  locationFilter === loc
                    ? "bg-orange-500 text-white border-orange-500 shadow-[0_4px_14px_rgba(234,88,12,0.3)]"
                    : "bg-white text-orange-700 border-orange-200 hover:border-orange-400",
                ].join(" ")}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* ── Count ── */}
        <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-6">
          Showing {filtered.length} of {temples.length} temples
        </p>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-5">
          {filtered.map((temple, idx) => (
            <TempleTimingCard key={temple.id} temple={temple} idx={idx} />
          ))}

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <Clock size={36} className="text-orange-200" />
              <p className="text-stone-500 font-semibold">No temples found</p>
              <p className="text-stone-400 text-sm">Try a different search or filter</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}