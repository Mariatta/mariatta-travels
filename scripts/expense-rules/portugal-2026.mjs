/**
 * Mapping rules for portugal-2026 (Porto · Lisbon · Aveiro, Aug 23 – Sep 5 2026).
 *
 * Card statements name the merchant, not the reason, so the day-trip rules are
 * scoped by date: everything paid on the Gerês day belongs to the Gerês line
 * item, not to "food in Porto". Rules are tried top to bottom, first match wins,
 * so the specific ones come before the per-city catch-alls.
 *
 * `review: '...'` prints the row in the run summary. Those are the calls that
 * needed a judgment about *which* line item, not whether the row belongs.
 *
 * Rule shape and matching options: see ./default.mjs.
 */

const uber = row => (/tip/i.test(row.category) ? 'Uber tip' : 'Uber');

/** Statement city → city name in the trip config (Sintra and Braga are day trips). */
export const cityNames = {
  porto: 'Porto',
  lisbon: 'Lisbon',
  aveiro: 'Aveiro',
  sintra: 'Lisbon',
  braga: 'Porto',
};

export const rules = [
  /* ---- Pre-trip bookings ------------------------------------------------ */
  { when: { merchant: /expedia.*sintra|expedia.*tour/i }, category: 'activities', itemId: 'act-sintra', as: 'Sintra day trip (booked via Expedia)' },
  { when: { merchant: /expedia/i }, category: 'accommodation', itemId: 'hotel-porto', as: 'Porto hotel (Expedia)', review: 'Expedia charge with no city hint, assumed the Porto hotel' },
  { when: { merchant: /airbnb/i }, category: 'accommodation', itemId: 'hotel-aveiro', as: 'Aveiro Airbnb' },
  { when: { merchant: /fishingbook|fishing/i }, category: 'activities', itemId: 'act-charter', as: 'Tagus fishing charter deposit' },
  { when: { merchant: /getyourguide/i }, category: 'activities', itemId: 'act-douro', as: 'Douro Valley tour (GetYourGuide)' },

  /* ---- Inter-city trains, by leg --------------------------------------- */
  { when: { merchant: /comboios/i, city: 'porto' }, category: 'trains', itemId: 'train-porto-lisbon', as: 'CP Alfa Pendular: Porto to Lisbon', review: 'prepaid Aug 21, matched to the Porto → Lisbon leg by city' },
  { when: { merchant: /comboios/i, city: 'lisbon' }, category: 'trains', itemId: 'train-lisbon-aveiro', as: 'CP Alfa Pendular: Lisbon to Aveiro', review: 'prepaid Aug 29, matched to the Lisbon → Aveiro leg by city' },
  { when: { merchant: /comboios/i, city: 'aveiro' }, category: 'activities', itemId: 'act-coimbra', as: 'CP train to Coimbra', review: 'bought Sep 2 in Aveiro, assumed the Sep 3 Coimbra day trip' },

  /* ---- Peneda-Gerês day, Aug 26 (rental car, fuel, Braga stops, lunch) -- */
  { when: { merchant: /avis|rent-?a-?car|europcar|hertz|sixt/i }, category: 'activities', itemId: 'act-geres', as: 'Avis 1-day rental (Gerês)' },
  { when: { merchant: /combustivei|moeve|galp|repsol|cepsa|bp /i, date: /^2026-08-2[67]$/ }, category: 'activities', itemId: 'act-geres', as: 'Fuel (Gerês day)' },
  { when: { merchant: /churrasqueira parque/i, date: '2026-08-26' }, category: 'activities', itemId: 'act-geres', as: 'Lunch on the Gerês day' },
  { when: { merchant: /teelegend|nata 7/i }, category: 'misc', itemId: 'misc-snacks', as: row => `${row.detail.includes('NATA') ? 'Pastéis de nata' : 'Bubble tea'} in Braga` },

  /* ---- Douro Valley day, Aug 25 ---------------------------------------- */
  { when: { merchant: /magical douro/i }, category: 'activities', itemId: 'act-douro', as: 'Douro river boat' },
  { when: { merchant: /brisa areas servico/i }, category: 'misc', itemId: 'misc-snacks', as: 'Motorway service area', review: 'service-area stop on the Douro day, booked as snacks' },

  /* ---- Matosinhos grill lunch, Aug 27 ---------------------------------- */
  { when: { merchant: /o valentim/i }, category: 'activities', itemId: 'act-matosinhos', as: 'O Valentim, Matosinhos', review: 'Aug 27 seafood grill, matched to the Matosinhos beach day' },

  /* ---- Sintra day, Aug 31 ---------------------------------------------- */
  { when: { city: 'sintra' }, category: 'activities', itemId: 'act-sintra', as: 'Lunch in Sintra' },

  /* ---- Lisbon attractions ---------------------------------------------- */
  { when: { merchant: /museu agua|epal aqueduto/i }, category: 'activities', itemId: 'act-misc', as: row => (/aqueduto/i.test(row.detail) ? 'Aqueduto das Águas Livres' : 'Museu da Água') },
  { when: { merchant: /game over/i }, category: 'activities', itemId: 'act-misc', as: 'Escape room, Lisbon' },
  { when: { merchant: /catedral/i }, category: 'activities', itemId: 'act-misc', as: 'Sé do Porto cathedral' },
  { when: { merchant: /alvorada comum/i }, category: 'activities', itemId: 'act-moliceiro', as: 'Moliceiro boat ride, Aveiro' },

  /* ---- Local transport -------------------------------------------------- */
  { when: { merchant: /tmp aeroporto/i }, category: 'local-transport', itemId: 'transport-airport', as: 'Metro to/from OPO' },
  { when: { category: /airport/i }, category: 'local-transport', itemId: 'transport-airport', as: 'Metro to Porto airport' },
  { when: { merchant: /^uber/i, date: '2026-08-22' }, category: 'local-transport', itemId: 'transport-airport', as: 'Uber to YVR', review: 'departure-day Uber, booked as airport transport' },
  { when: { merchant: /^tmp /i }, category: 'local-transport', itemId: 'transport-porto', as: 'Porto metro (Andante)' },
  { when: { merchant: /uber\s*\*?\s*eats/i }, category: 'food', itemId: 'food-lisbon', as: 'Uber Eats' },
  { when: { merchant: /^uber/i, city: 'porto' }, category: 'local-transport', itemId: 'transport-porto', as: uber },
  { when: { merchant: /^uber/i, city: 'lisbon' }, category: 'local-transport', itemId: 'transport-lisbon', as: uber },
  { when: { merchant: /^uber/i, city: 'aveiro' }, category: 'local-transport', itemId: 'transport-aveiro', as: uber },

  /* ---- Snacks and treats ------------------------------------------------ */
  { when: { category: /ice ?cream|nata|snack|gelado/i }, category: 'misc', itemId: 'misc-snacks' },

  /* ---- Shopping --------------------------------------------------------- */
  { when: { merchant: /luant interiores/i }, category: 'shopping', itemId: 'shop-tiles', as: 'Ceramics and homeware, Porto', review: 'homeware shop, booked against the tiles/ceramics line' },
  { when: { category: /pycon.*shirt|tshirt|t-shirt/i }, category: 'shopping', itemId: 'shop-other', as: 'PyCon Portugal t-shirt', review: 'conference merch, booked as shopping rather than against the ticket line' },
  { when: { merchant: /futurejasmine|carlos henriques/i }, category: 'shopping', itemId: 'shop-other', review: 'unfamiliar merchant, booked as shopping' },

  /* ---- Miscellaneous ---------------------------------------------------- */
  { when: { merchant: /farmacia/i }, category: 'misc', itemId: 'misc-unexpected', as: 'Pharmacy, Lisbon' },
  { when: { merchant: /cash advance fee/i }, category: 'misc', itemId: 'misc-unexpected', as: 'Cash advance fee' },
  { when: { merchant: /axis porto/i }, category: 'food', itemId: 'food-porto', review: 'arrival-day charge at Axis Porto, booked as a Porto meal' },

  /* ---- Everything else that is eating or groceries, by city ------------- */
  { when: { city: 'porto' }, category: 'food', itemId: 'food-porto' },
  { when: { city: 'braga' }, category: 'food', itemId: 'food-porto' },
  { when: { city: 'lisbon' }, category: 'food', itemId: 'food-lisbon' },
  { when: { city: 'aveiro' }, category: 'food', itemId: 'food-aveiro' },
];

export const fallback = row => ({
  category: 'misc',
  itemId: 'misc-unexpected',
  review: `no city and no rule matched (${row.detail})`,
});
