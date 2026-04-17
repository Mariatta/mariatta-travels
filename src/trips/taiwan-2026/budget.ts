import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-outbound', label: 'YVR to TPE (4 passengers)', estimated: 8000, currency: 'CAD', note: 'Round-trip economy — book early' },
      { id: 'flights-return', label: 'TPE to YVR (4 passengers)', estimated: 0, currency: 'CAD', note: 'Included in round-trip above' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-taipei', label: 'Taipei hotel (5 nights, Aug 22–27)', estimated: 22500, currency: 'TWD', note: 'Family room — ~NT$4,500/night' },
      { id: 'hotel-hualien', label: 'Hualien hotel (2 nights, Aug 27–29)', estimated: 7000, currency: 'TWD', note: 'Family room — ~NT$3,500/night' },
      { id: 'hotel-sunmoon', label: 'Sun Moon Lake (1 night, Aug 29–30)', estimated: 5000, currency: 'TWD', note: 'Lakeside guesthouse or hotel' },
      { id: 'hotel-taichung', label: 'Taichung hotel (1 night, Aug 30–31)', estimated: 3500, currency: 'TWD', note: 'City centre' },
      { id: 'hotel-tainan', label: 'Tainan hotel (2 nights, Aug 31–Sep 2)', estimated: 6000, currency: 'TWD', note: 'Historic district — ~NT$3,000/night' },
      { id: 'hotel-kaohsiung', label: 'Kaohsiung hotel (3 nights, Sep 2–5)', estimated: 12000, currency: 'TWD', note: 'Family room — ~NT$4,000/night' },
    ],
  },
  {
    id: 'trains',
    title: 'Inter-city Transport',
    emoji: '🚄',
    type: 'pre-trip',
    items: [
      { id: 'train-taipei-hualien', label: 'TRA Taipei to Hualien (4 pax)', estimated: 2800, currency: 'TWD', note: 'Puyuma Express, Aug 27' },
      { id: 'train-hualien-taichung', label: 'TRA Hualien to Taichung (4 pax)', estimated: 3200, currency: 'TWD', note: 'Aug 29' },
      { id: 'train-taichung-tainan', label: 'THSR Taichung to Tainan (4 pax)', estimated: 3000, currency: 'TWD', note: 'High Speed Rail, ~45 min' },
      { id: 'train-tainan-kaohsiung', label: 'THSR Tainan to Kaohsiung (4 pax)', estimated: 600, currency: 'TWD', note: '~15 min' },
      { id: 'train-kaohsiung-airport', label: 'THSR Kaohsiung to Taoyuan (4 pax)', estimated: 5600, currency: 'TWD', note: 'Departure day, Sep 5' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍜',
    type: 'during-trip',
    items: [
      { id: 'food-taipei', label: 'Taipei dining (5 days)', estimated: 10000, currency: 'TWD', note: '~NT$2,000/day for family of 4' },
      { id: 'food-hualien', label: 'Hualien dining (2 days)', estimated: 3000, currency: 'TWD', note: '~NT$1,500/day' },
      { id: 'food-taichung', label: 'Sun Moon Lake & Taichung dining (2 days)', estimated: 4000, currency: 'TWD', note: '~NT$2,000/day' },
      { id: 'food-tainan', label: 'Tainan dining (2 days)', estimated: 3000, currency: 'TWD', note: '~NT$1,500/day — street food heaven' },
      { id: 'food-kaohsiung', label: 'Kaohsiung dining (3 days)', estimated: 5000, currency: 'TWD', note: '~NT$1,700/day' },
      { id: 'food-special', label: 'Special meals', estimated: 3000, currency: 'TWD', note: 'Din Tai Fung, seafood splurge, etc.' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-taipei', label: 'Taipei MRT, buses, taxis (5 days)', estimated: 3000, currency: 'TWD', note: 'EasyCard + occasional taxi' },
      { id: 'transport-hualien', label: 'Hualien taxis/tours (2 days)', estimated: 3000, currency: 'TWD', note: 'Taroko Gorge driver/tour' },
      { id: 'transport-other', label: 'Other cities transport', estimated: 3000, currency: 'TWD', note: 'MRT, buses, bikes across all cities' },
      { id: 'transport-airport', label: 'Airport transfers', estimated: 1000, currency: 'TWD', note: 'Airport MRT both ways' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Attractions',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-101', label: 'Taipei 101 Observatory (4 pax)', estimated: 2400, currency: 'TWD', note: '~NT$600/adult, discounts for kids' },
      { id: 'act-palace', label: 'National Palace Museum (4 pax)', estimated: 1200, currency: 'TWD', note: '~NT$350/adult, free for kids under 18' },
      { id: 'act-sunmoon-bikes', label: 'Sun Moon Lake bike rental', estimated: 800, currency: 'TWD' },
      { id: 'act-ferry', label: 'Sun Moon Lake ferry pass', estimated: 1200, currency: 'TWD', note: 'Family of 4' },
      { id: 'act-cijin-ferry', label: 'Cijin Island ferry (Kaohsiung)', estimated: 160, currency: 'TWD', note: '~NT$40/person' },
      { id: 'act-misc', label: 'Other museums and attractions', estimated: 2000, currency: 'TWD' },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & Souvenirs',
    emoji: '🛍️',
    type: 'during-trip',
    items: [
      { id: 'shop-tea', label: 'Taiwanese tea and tea sets', estimated: 3000, currency: 'TWD' },
      { id: 'shop-other', label: 'Other shopping', estimated: 2000, currency: 'TWD' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-esim', label: 'eSIM or local SIM card (data plan)', estimated: 30, currency: 'CAD', note: '14 days of data' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-easycard', label: 'EasyCard transit cards (4 pax)', estimated: 800, currency: 'TWD', note: 'NT$100 deposit + loaded value' },
      { id: 'misc-snacks', label: 'Snacks, drinks, bubble tea', estimated: 3000, currency: 'TWD' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 3000, currency: 'TWD' },
    ],
  },
];