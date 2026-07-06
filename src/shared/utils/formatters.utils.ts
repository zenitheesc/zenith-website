import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Extracts the display name for a launch, removing the prefix before " - "
 * and the trailing ".json" suffix when present.
 *
 * @param name - Raw launch name returned by the API.
 * @returns A cleaned, human-readable launch name.
 */
export const formatLaunchName = (name: string): string => {
  const parts = name.split(' - ');
  const formattedName = parts.length > 1 ? parts[1].trim() : name;

  return formattedName.replace(/\.json$/i, '');
};

/**
 * Converts a launch name into a URL-safe slug.
 *
 * The result is normalized to lowercase, stripped of accents, and converted
 * to kebab-case so it can be used safely in dynamic routes.
 *
 * Example:
 * ```ts
 * slugifyLaunchName('2026 - Lançamento de Teste.json');
 * // 'lancamento-de-teste'
 * ```
 *
 * @param name - Raw launch name returned by the API.
 * @returns A slugified version of the launch name.
 */
export const slugifyLaunchName = (name: string): string => {
  return formatLaunchName(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Formats a launch datetime using Portuguese locale rules.
 *
 * Dates from the current year omit the year in the formatted string; older
 * dates include it. The current UTC time is appended in the existing format.
 *
 * @param datetime - ISO datetime string returned by the API.
 * @returns A localized, human-readable launch datetime string.
 */
export const formatLaunchDatetime = (datetime: string): string => {
  const date = new Date(datetime);
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();

  const formattedDate = format(date, dateYear === currentYear ? 'EEEEEE., dd MMM' : "EEEEEE., dd MMM 'de' yyyy", {
    locale: ptBR
  });

  return `${formattedDate} - ${date.toLocaleTimeString('pt-BR')}`;
};

export const formatAltitude = (altitude: number) =>
  new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(altitude) + ' m';
export const formatAltitudeInKm = (altitude: number) =>
  `${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(altitude / 1000)} km`;
