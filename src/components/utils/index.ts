import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertGoogleDriveLink = (originalLink: string): string => {
  const driveShareRegex =
    /^https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view(\?usp=sharing)?$/;

  const match = originalLink.match(driveShareRegex);

  if (!match) {
    return originalLink;
  }

  const fileId = match[1];

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
};

export const normalizePath = (path: string) => {
  const regex = /^\/[a-z]{2}(\/|$)/;
  return path.replace(regex, "/");
};

export const isActiveLink = (currentPath: string, itemPath: string) => {
  const normalizedCurrent = normalizePath(currentPath);

  return normalizedCurrent === itemPath;
};

export function getPathWithoutLocale(pathname: string): string {
  const localeMatch = pathname.match(/^\/(id|jp)(\/.*|$)/);
  return localeMatch ? localeMatch[2] || "/" : pathname;
}

export function formatDate(
  dateString: string,
  format = "MMMM, D YYYY"
): string {
  return moment(dateString).format(format);
}

export function formatCustomDate(
  dateString: string,
  fromFormat: string,
  toFormat = "YYYY-MM-DD"
): string {
  return moment(dateString, fromFormat).format(toFormat);
}

export const scoreConfig = (
  score: number,
  type: "background" | "color" = "background"
): string => {
  let color = "";

  if (type === "background") {
    if (score < 50) color = "bg-red-300";
    else if (score >= 50 && score < 150) color = "bg-yellow-300";
    else if (score >= 150 && score < 200) color = "bg-orange-300";
    else if (score >= 200 && score <= 250) color = "bg-green-300";
  } else {
    if (score < 50) color = "text-red-300";
    else if (score >= 50) color = "text-yellow-300";
    else if (score >= 150) color = "text-orange-300";
    else if (score >= 200) color = "text-green-300";
  }

  return color;
};

export const isFirstCharKanji = (text: string): boolean => {
  if (!text) return false;

  const kanjiRegex = /[\u4E00-\u9FFF]/;

  return kanjiRegex.test(text[0]);
};

export function convertStyledText(text: string): string {
  const nestedRegex = /{underline}{bold}(.*?){\/underline}{\/bold}/g;
  const boldRegex = /{bold}(.*?){\/bold}/g;
  const underlineRegex = /{underline}(.*?){\/underline}/g;

  const formattedText = text
    .replace(nestedRegex, "<u><strong>$1</strong></u>")
    .replace(boldRegex, "<strong>$1</strong>")
    .replace(underlineRegex, "<u>$1</u>");

  return formattedText;
}
