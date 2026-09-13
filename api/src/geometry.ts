/**
 * Calculates the area of a circle from its radius.
 *
 * @param radius The circle's radius.
 * @returns The circle's area, or null when the radius is invalid.
 * @example calculateCircleArea(2) // 12.566370614359172
 */
export function calculateCircleArea(radius: number): number | null {
  if (!Number.isFinite(radius) || radius < 0) {
    return null;
  }

  return Math.PI * radius ** 2;
}

export interface Circle {
  radius: number;
  area: number;
}

/**
 * Creates a circle with its radius and calculated area.
 *
 * @param radius The circle's radius.
 * @returns The circle, or null when the radius is invalid.
 * @example await getCircle(2) // { radius: 2, area: 12.566370614359172 }
 */
export async function getCircle(radius: number): Promise<Circle | null> {
  const area = calculateCircleArea(radius);

  if (area === null) {
    return null;
  }

  return { radius, area };
}
