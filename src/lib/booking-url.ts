const GUESTSAGE_BASE_URL =
  "https://be.guestsage.com/pl/0bf0dc4c-089f-42f4-8bf0-3ea22a76ad8a";

export interface BookingUrlParams {
  arrivalDate: string;
  departureDate: string;
  personsCount: number;
}

const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

export function buildBookingUrl(params: BookingUrlParams): string {
  if (!isoDatePattern.test(params.arrivalDate)) {
    throw new Error("arrivalDate must use YYYY-MM-DD format");
  }

  if (!isoDatePattern.test(params.departureDate)) {
    throw new Error("departureDate must use YYYY-MM-DD format");
  }

  if (!Number.isInteger(params.personsCount) || params.personsCount < 1) {
    throw new Error("personsCount must be a positive integer");
  }

  const url = new URL(GUESTSAGE_BASE_URL);
  url.searchParams.set("arrivalDate", params.arrivalDate);
  url.searchParams.set("departureDate", params.departureDate);
  url.searchParams.set("personsCount", String(params.personsCount));

  return url.toString();
}
