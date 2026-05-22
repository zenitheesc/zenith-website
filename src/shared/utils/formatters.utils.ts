import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatLaunchName = (name: string): string => {
  const parts = name.split(' - ');
  const formattedName = parts.length > 1 ? parts[1].trim() : name;

  return formattedName.replace(/\.json$/i, '');
};

export const formatLaunchDatetime = (datetime: string): string => {
  const date = new Date(datetime);
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();

  const formattedDate = format(date, dateYear === currentYear ? 'EEEEEE., dd MMM' : "EEEEEE., dd MMM 'de' yyyy", {
    locale: ptBR
  });

  return `${formattedDate} - ${date.toLocaleTimeString('pt-BR')} UTC`;
};

export const convertAltitudeToKm = (altitude: number): string => {
  const altitudeInKm = altitude / 1000;
  return `${altitudeInKm.toFixed(2)} km`;
};
