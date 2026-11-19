import type { SacramentMeeting } from "./types";

export const wardName = "Oakridge 2nd Ward";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-11-15",
    meetingType: "testimony",
    presiding: "Bishop Daniel Reeves",
    conducting: "Brother Michael Chen",
    announcements: [
      "Ward choir rehearsal begins after today's meeting.",
      "Youth temple trip: registration closes November 22.",
      "Primary program practice continues this Wednesday.",
    ],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Emily Carter",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 195, title: "How Great the Wisdom and the Love" },
    speakers: [
      { name: "Sister Lauren Adams", topic: "Personal testimonies", type: "speaker" },
      { name: "Brother Thomas Gray", topic: "Gratitude for the Savior", type: "speaker" },
    ],
    closingHymn: { number: 241, title: "Count Your Blessings" },
    closingPrayer: "Brother Robert Lane",
  },
  {
    id: 2,
    date: "2026-11-08",
    meetingType: "regular",
    presiding: "Bishop Daniel Reeves",
    conducting: "Brother Michael Chen",
    announcements: ["Fast Sunday will be observed next week."],
    openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
    openingPrayer: "Brother James Walker",
    wardBusiness: [{ description: "Sustaining of the new ward Primary secretary" }],
    stakeBusiness: false,
    sacramentHymn: { number: 136, title: "I Know That My Redeemer Lives" },
    speakers: [
      { name: "Sister Naomi Brooks", topic: "Faith in every footstep", type: "speaker" },
      { name: "Brother Aaron Foster", topic: "Trusting the Lord", type: "speaker" },
    ],
    closingHymn: { number: 100, title: "Nearer, My God, to Thee" },
    closingPrayer: "Sister Rachel Miller",
  },
  {
    id: 3,
    date: "2026-11-01",
    meetingType: "regular",
    presiding: "Bishop Daniel Reeves",
    conducting: "Brother Michael Chen",
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Sister Maria Lopez",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
    speakers: [
      { name: "Brother Samuel King", topic: "Bearing one another's burdens", type: "speaker" },
      { name: "Sister Grace Peterson", topic: "The restored gospel", type: "speaker" },
    ],
    closingHymn: { number: 89, title: "The Lord Is My Light" },
    closingPrayer: "Brother David Kim",
  },
  {
    id: 4,
    date: "2026-10-25",
    meetingType: "stake",
    presiding: "Stake President Alan Wright",
    conducting: "Bishop Daniel Reeves",
    announcements: ["Stake conference will be held November 7–8."],
    openingHymn: { number: 27, title: "Praise to the Man" },
    openingPrayer: "Sister Hannah Lee",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 185, title: "Reverently and Meekly Now" },
    speakers: [
      { name: "Elder Paul Jensen", topic: "Covenants and discipleship", type: "speaker" },
      { name: "Sister Olivia Martin", topic: "Ministering as the Savior did", type: "speaker" },
    ],
    closingHymn: { number: 134, title: "I Believe in Christ" },
    closingPrayer: "Brother Peter Young",
  },
  {
    id: 5,
    date: "2026-10-18",
    meetingType: "general",
    presiding: "Bishop Daniel Reeves",
    conducting: "Sister Rebecca Hall",
    openingHymn: { number: 3, title: "Now Let Us Rejoice" },
    openingPrayer: "Brother Isaac Moore",
    wardBusiness: [{ description: "Recognition of this year's Primary graduates" }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: "In Humility, Our Savior" },
    speakers: [
      { name: "Oakridge Ward Choir", topic: "Come, Thou Fount of Every Blessing", type: "musical-number" },
      { name: "Sister Emma Davis", topic: "Following the living prophet", type: "speaker" },
    ],
    closingHymn: { number: 301, title: "I Am a Child of God" },
    closingPrayer: "Sister Sofia Rivera",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}

export function getCurrentMeeting(): SacramentMeeting {
  return meetings[0];
}
