import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'booking',
    title: 'Campsite Booking',
    emoji: '🏕️',
    items: [
      { id: 'campsite-book', label: 'Book BC Parks campsite on Discover Camping', dueBy: 'ASAP — opens 4 months ahead', url: 'https://bcparks.ca/reservations/' },
      { id: 'campsite-confirm', label: 'Print / save campsite reservation confirmation' },
      { id: 'adventure-park-tickets', label: 'Buy Cultus Lake Adventure Park wristbands online for a small discount', url: 'https://cultus.com/' },
    ],
  },
  {
    id: 'gear',
    title: 'Camping Gear',
    emoji: '🎒',
    items: [
      { id: 'tent-check', label: 'Set up tent at home to check for rips, missing stakes, broken poles' },
      { id: 'sleeping', label: 'Sleeping bags + pads for 4 + spare blanket' },
      { id: 'kitchen', label: 'Camp stove + propane + lighter + matches' },
      { id: 'cookware', label: 'Pots, pan, utensils, cutting board, knife, dish soap, sponge' },
      { id: 'tableware', label: 'Plates, bowls, mugs, cutlery for 4 (reusable)' },
      { id: 'cooler', label: 'Cooler + ice packs (pre-freeze the night before)' },
      { id: 'water-jug', label: 'Water jug / bottles — campground has potable water' },
      { id: 'lighting', label: 'Headlamps for each person + lantern + spare batteries' },
      { id: 'chairs', label: 'Camp chairs (4) + picnic blanket / tarp' },
      { id: 'firewood', label: 'Plan to buy firewood locally — don\'t bring from home (invasive species rules)' },
      { id: 'first-aid', label: 'First-aid kit + any family medications' },
    ],
  },
  {
    id: 'packing',
    title: 'Packing for the Family',
    emoji: '🧳',
    items: [
      { id: 'swimsuits', label: 'Swimsuits + quick-dry towels for everyone' },
      { id: 'warm-layers', label: 'Fleece / hoodie for each person — lake nights can drop to 12°C even in July' },
      { id: 'rain-jacket', label: 'Rain jackets — Fraser Valley summer showers are common' },
      { id: 'sun-gear', label: 'Sunscreen, hats, sunglasses for everyone' },
      { id: 'bug-spray', label: 'Bug spray (DEET or picaridin) — mosquitoes at dusk' },
      { id: 'shoes', label: 'Water shoes / sandals + hiking shoes for Teapot Hill' },
      { id: 'kids-entertainment', label: 'Books, card games, travel games for quiet camp time' },
      { id: 'water-toys', label: 'Goggles, pool noodles, floaties, beach toys' },
    ],
  },
  {
    id: 'food-prep',
    title: 'Food Planning',
    emoji: '🍔',
    items: [
      { id: 'meal-plan', label: 'Plan meals: 2 breakfasts + 2 dinners at camp, 1 restaurant meal', note: 'Keep it simple: hot dogs, foil-packet dinners, eggs + bacon, pancakes' },
      { id: 'prep-at-home', label: 'Pre-chop veggies, pre-mix dry pancake mix, freeze meats' },
      { id: 'snacks', label: 'Trail snacks: granola bars, trail mix, fruit, crackers' },
      { id: 'smores', label: 'S\'mores kit: graham crackers, marshmallows, chocolate, skewers' },
      { id: 'grocery-list', label: 'Write the Chilliwack grocery list (fresh items to pick up en route)' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities',
    emoji: '🎢',
    items: [
      { id: 'teapot-hill', label: 'Scout Teapot Hill hike — easy 5 km loop; arrive early (parking fills)' },
      { id: 'paddle-rental-check', label: 'Confirm paddleboard / kayak rental availability at Main Beach' },
      { id: 'bridal-veil-plan', label: 'Optional: plan Bridal Veil Falls stop on the drive home' },
    ],
  },
  {
    id: 'before-departure',
    title: 'Before Departure',
    emoji: '🏠',
    items: [
      { id: 'pre-fish-fill', label: 'Fill both fish feeders 🐟' },
      { id: 'pre-fish-charge', label: 'Charge both fish feeders (or fresh batteries)' },
      { id: 'pre-fish-test', label: 'Test-fire both fish feeders before leaving' },
      { id: 'pre-fish-water', label: 'Top up tank water / run a water change' },
      { id: 'car-charge', label: 'Charge the EV to 100% the night before' },
      { id: 'car-pack', label: 'Load the car the night before — save hours on Friday morning' },
      { id: 'garbage', label: 'Take out garbage / compost before leaving' },
      { id: 'emergency-contact', label: 'Share campsite location with an emergency contact' },
    ],
  },
];
