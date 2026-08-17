// Google Places API — Reviews route
// Set these in your .env.local:
//   GOOGLE_PLACES_API_KEY=your_key_here
//   GOOGLE_PLACE_ID=your_place_id_here
//
// Once credentials are added this route will return live reviews from Google.

import { NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  if (!API_KEY || !PLACE_ID) {
    // Return fallback static reviews when credentials aren't configured
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, rating: 5.0, total: 7, live: false });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${API_KEY}&reviews_sort=newest`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, rating: 5.0, total: 7, live: false });
    }

    const { result } = data;
    return NextResponse.json({
      reviews: result.reviews ?? [],
      rating: result.rating ?? 5.0,
      total: result.user_ratings_total ?? 0,
      live: true,
    });
  } catch {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, rating: 5.0, total: 7, live: false });
  }
}

// Static fallback — replace with real data or leave as-is until API is connected
const FALLBACK_REVIEWS = [
  {
    author_name: "Sudheer Kumar",
    rating: 5,
    text: "There is no company that can beat Creators Touch. Thanks to their talent, our site has taken off in the search engines like a rocket.",
    relative_time_description: "a year ago",
    profile_photo_url: "",
  },
  {
    author_name: "Karthika",
    rating: 5,
    text: "Highly innovative in their work. They have the best team on board, bubbling with talent. I would highly recommend their services.",
    relative_time_description: "8 months ago",
    profile_photo_url: "",
  },
  {
    author_name: "Sanjana",
    rating: 5,
    text: "Very sharp, high-quality team. The project management was fantastic — specific timelines for all the bits and pieces. They design and build in a nice, elegant way.",
    relative_time_description: "6 months ago",
    profile_photo_url: "",
  },
  {
    author_name: "Ramya Vamsi",
    rating: 5,
    text: "Great quality work and on-time delivery. Reasonable cost, outstanding customer support, and quick, easy changes to my website.",
    relative_time_description: "5 months ago",
    profile_photo_url: "",
  },
  {
    author_name: "Vijay Reddy",
    rating: 5,
    text: "The team completely transformed our digital presence. Our website now reflects the premium experience we deliver in-store — and footfall has measurably improved.",
    relative_time_description: "4 months ago",
    profile_photo_url: "",
  },
  {
    author_name: "Priya Nair",
    rating: 5,
    text: "Outstanding work on our admissions portal. They understood our requirements perfectly and delivered well ahead of schedule.",
    relative_time_description: "3 months ago",
    profile_photo_url: "",
  },
  {
    author_name: "Deepa Rao",
    rating: 5,
    text: "Creative, reliable and always on brand. Creators Touch helped us modernise our identity while keeping our heritage intact.",
    relative_time_description: "2 months ago",
    profile_photo_url: "",
  },
];
